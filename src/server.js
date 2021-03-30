const express = require("express");
const path = require("path");
const { saveTask } = require("../utils/notes");

// Init the instance of express
const app = express();

// Middleware
app.use(express.json());

const public_directory = path.join(__dirname, "../public/");
app.use(express.static(public_directory));
// app.use(express.static(path.join(__dirname, "../public/")))

// Routes
app.get("/", (req, res) => {
  res.send("message");
});

app.get("/contact", (req, res) => {
  res.send("Hi there");
});

app.post("/tasks", (req, res) => {
  console.log(req.body);
  saveTask(req.body.task);
  res.send({ message: `Success` });
});

app.listen(5000, () => {
  console.log("listening on port 5000");
});
