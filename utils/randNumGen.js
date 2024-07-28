class randNumGen {
  randNumGen() {
    const len = process.env.SHORTURL_PATH_LENGTH;

    if (len < 5) {
      throw new Error("Length must be more than 5");
    }

    const minNum = Math.pow(10, len - 1);
    const maxNum = Math.pow(10, len) - 1;

    return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
  }
}

module.exports = randNumGen;
