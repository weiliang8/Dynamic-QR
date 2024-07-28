const mongoose = require("mongoose");

const qrSchema = new mongoose.Schema(
  {
    originalUrl: {
      type: String,
      required: true,
      lowercase: true,
    },
    shortUrlPath: {
      type: String,
      required: true,
    },
    // createdBy: {
    //   type: qrSchema.Types.ObjectId,
    //   ref: Users,
    // },
    createdAt: Date,
    updatedAt: Date,
    lastVisited: Date,
    visitCounts: Number,
  },
  {
    timestamps: true,
  },
);

qrSchema.post("save", function () {
  console.log("Data has been saved");
});

module.exports = mongoose.model("qr", qrSchema);
