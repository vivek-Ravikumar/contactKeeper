const express = require("express");

const contactsRouter = express.Router();

//to send contacts
contactsRouter.get("/", (req, res) => {
  res.send("from contact Router");
});

//to create contacts
contactsRouter.post("/", (req, res) => {
  res.send("contact added");
});

//to update contacts
contactsRouter.put("/:id", (req, res) => {
  res.send("update contact");
});

//to delete contacts
contactsRouter.delete("/:id", (req, res) => {
  res.send("delete contact");
});

module.exports = contactsRouter;
