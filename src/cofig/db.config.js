const mongoose = require("mongoose");
const { NODE_ENV, ATLAS_DB_URL } = require("./server.config");

async function connectToDB() {
  try {
    if (NODE_ENV === "development") {
      await mongoose.connect(ATLAS_DB_URL);
    }
  } catch (error) {
    //TODO
  }
}

module.exports = connectToDB;
