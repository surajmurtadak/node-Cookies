const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Operation on Cookie 🍪");
});

app.get("/set-cookie", (req, res) => {
  res.cookie("name", "suraj");
  res.send("cookie set");
});

app.get("/get-cookie", (req, res) => {
  res.send(req.cookies);
});

app.get("/del-cookie", (req, res) => {
  res.clearCookie("name");
  res.send("cookie deleted");
});

app.get("/update-cookie", (req, res) => {
  res.cookie("name", "akshay");
  res.send(" name cookie updated");
});

app.get("/expire-cookie", (req, res) => {
  res.cookie("surname", "murtadak", { maxAge: 5000 });
  res.send("new Cookie added but expire in 5sec");
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
