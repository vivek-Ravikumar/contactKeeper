const express = require("express");

const usersRouter = express.Router();

usersRouter.get("/", (req, res) => {
  res.send("from users Router");
});

usersRouter.post("/", (req, res) => {
  res.send("registered");
});

module.exports = usersRouter;
