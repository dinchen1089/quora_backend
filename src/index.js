const express = require("express");
const bodyParser = require("body-parser");
const apiRouter = require("./routes");
const connectToDB = require("./cofig/db.config");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.use("/api", apiRouter);
app.get("/ping", (req, res) => {
  return res.json({ message: "You are connected to server. Haha" });
});

app.listen(3000, () => {
  connectToDB();
});
