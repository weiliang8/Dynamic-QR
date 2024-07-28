const express = require("express");
const dotenv = require("dotenv");
const app = express();
const mongoose = require("mongoose");
const ip = require('ip')
const cors = require("cors");
const appError = require("./utils/appError")
const errorHandler = require("./middleware/errorHandler")

app.use(express.json());

const User = require("./models/users");

dotenv.config({ path: `${__dirname}/config/config.env` });

mongoose
    .connect(process.env.MONGODB_URL)
    .then((success) => console.log("DB Connected"))
    .catch((err) => console.log(err.message));

app.use(logger);
app.use(cors());

// app.get("/", (req, res, next) => {
//     console.log("hello world");
//     next();
// });

const userRouter = require("./routes/users");
const qrRouter = require("./routes/qr")


app.use("/users", userRouter);
app.use("/qr",qrRouter);

app.all("*",(req,res,next)=>{
    next(new appError(`This path ${req.originalUrl} isn't on this server!`, 404));
})

app.use(errorHandler);


function logger(req, res, next) {
    console.log(req.originalUrl);
    next();
}

PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(
        `Server starting in ${ip.address()}:${PORT} in ${process.env.NODE_ENV} mode...`,
    );
});
