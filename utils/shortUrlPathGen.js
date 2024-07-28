const random = require("random-string-generator");

class shortUrlPathGen {
  generate() {
    const pathLength = parseInt(process.env.SHORTURL_PATH_LENGTH);
    const shortUrlPath = random(pathLength);

    return shortUrlPath;
  }
}

module.exports= shortUrlPathGen