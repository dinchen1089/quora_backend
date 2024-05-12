const express = require("express");
const userRouter = require("./users.routes");

const v1Router = express.Router();

// v1Router.get("/", (req, res) => {
//   res.json({ ddddddd: "ddd22wdd" });
// });
v1Router.use("/users", userRouter);

module.exports = v1Router;
