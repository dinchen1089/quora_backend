const mongoose = require("mongoose");

const userScheme = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is a mandatory field"],
  },
  email: {
    type: String,
    required: [true, "Email is a mandatory field"],
  },
});

const Users = mongoose.model("User", userScheme);
module.exports = Users;
