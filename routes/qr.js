const express = require("express")
const router = express.Router()

 

const {
    createQR
  } = require("../controllers/createQR.js"); 

router.route("/")
    .post(createQR)
    // .get(retrieveQR)
    // .put(updateQR)
    // .delete(deleteQR)

// router.route("/all")
//     .get(retrieveQRs)
    

module.exports = router;