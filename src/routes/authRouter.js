const express = require("express");

const authRouter = express.Router();

authRouter.get("/", (req, res) => {
  res.send("from auth Router");
});

authRouter.post("/", (req, res) => {
  res.send("Login user");
});

module.exports = authRouter;
