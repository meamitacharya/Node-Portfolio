const express = require("express");
const sendMail = require("./mail");
const app = express();
const path = require("path");

const log = console.log;
const PORT = 8000;

app.use(express.static(path.join(__dirname, "views")));

//data parsing
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/email", (req, res) => {
  const { message, email, subject } = req.body;

  sendMail(email, subject, message, function(err, data) {
    if (err) {
      res.status(500).json({ message: "Internal Error" });
    } else {
      // res.json({ message: "Mail sent..." });
      res.redirect("/");
      return;
    }
  });
});
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.listen(PORT, () => log("Server started at 8080..."));
