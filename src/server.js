const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  // any code is valid here
  console.log(req.query);

  res.send({ message: `Hello your name is ${req.query.name}` });
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send({
    message: `You entered your info under the name ${req.body.name}`,
  });
});

app.get("/data", (req, res) => {
  res.send({ message: "Hello there" });
});

app.listen(5000, () => {
  console.log("listening on port 5000");
});
