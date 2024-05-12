const express = require("express");
const v1Router = require("./v1");
const apiRouter = express.Router();
const app = express();
// apiRouter.get("/", (req, res) => {
//   res.json({ message: "/api route is woring" });
//   return;
// });

apiRouter.use("/v1", v1Router);

module.exports = apiRouter;
