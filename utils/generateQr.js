// Create QR: https://medium.com/@mohsinogen/how-to-generate-qr-codes-with-node-js-and-express-js-a098f9a38525
// Convert img to BSON: https://sparkbyexamples.com/mongodb/mongodb-put-an-image-file-in-a-json-object/
const QRCode = require("qrcode");
const BSON = require('bson');


class generateQr {
    async generate(url) {
      const qrCodeImage = await QRCode.toDataURL(url);

// const imageBuffer = fs.readFileSync('G:\StudentProfile.PNG');
// const binaryData = new BSON.Binary(imageBuffer);a
// const json = {
//   file: 'StudentProfile.PNG',
//   data: binaryData
// };
  
      return shortUrlPath;
    }
  }
  
  module.exports= shortUrlPathGen