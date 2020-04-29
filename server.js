const express = require("express");
const server = express();

server.get("/", function (require, response) {
  return response.send("Ok, cheguei")
});

server.listen(3000);