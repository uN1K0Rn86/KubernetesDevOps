const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

var counter = 0;

app.get("/pingpong", (_req, res) => {
  counter += 1;
  res.send(`pong ${counter}`);
});

app.listen(port, () => {
  console.log(`Server started in port ${port}`);
});
