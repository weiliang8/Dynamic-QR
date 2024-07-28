//https://medium.com/@mohsinogen/how-to-generate-qr-codes-with-node-js-and-express-js-a098f9a38525
// const QRCode = require("qrcode");

const shortUrlPathGen = require("../utils/generateUrlPath")
const QR = require("../models/qr");

exports.createQR = async (req, res, next) => {
 
  try {
    const {originalUrl} = req.body;

  let pathGen = new shortUrlPathGen;
     const shortUrlPath = pathGen.generate();

      const newQR = new QR({originalUrl,shortUrlPath});

      await newQR.save();

      res.status(201).json({ status:"Success", message: 'QR code generated successfully', data:newQR });
  }catch (error) {
    console.log('Error generating QR code:', error);
    res.status(500).json({ status:"Failed", error: 'Internal Server Error' });
  }
};