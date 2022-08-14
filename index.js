const express = require("express");
const router = require("./router");
// const http = require("http");

const port = 5050;

const app = express();

app.use("/", router);

app.listen(port, "localhost", () => {
  console.log("server starts");
});
