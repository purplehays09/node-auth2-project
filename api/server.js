//IMPORT EXPRESS AND MIDDLEWARE
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
//IMPORT ROUTERS
const router= require("../folder/router.js");
//MAKE SERVER AND INVOKE EXPRESS
const server = express();
//USE MIDDLEWARE AND EXPRESS.JSON
server.use(helmet());
server.use(express.json());
server.use(cors());
//USE ROUTER
server.use("/folder/router", router);
//MAKE A BASE API CALL
server.get("/", (req, res) => {
  res.json({ api: "up" });
});
//EXPORT SERVER
module.exports = server;
