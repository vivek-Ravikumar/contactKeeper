const express = require("express");
const usersRouter = require("./routes/usersRouter");
const contactsRouter = require("./routes/contactsRouter");
const authRouter = require("./routes/authRouter");
const app = express();

app.get("/", (req, res) => {
  res.json({ msg: "hello from server" });
});

app.use("/api/users", usersRouter);
app.use("/api/contacts", contactsRouter);
app.use("/api/auth", authRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`server listerning on port ${PORT}`));
