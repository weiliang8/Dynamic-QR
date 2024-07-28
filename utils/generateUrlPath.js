const random = require("random-string-generator");

class generateUrlPath {
  generate() {
    const pathLength = parseInt(process.env.SHORTURL_PATH_LENGTH);
    const shortUrlPath = random(pathLength);

    return shortUrlPath;
  }
}

module.exports= generateUrlPath