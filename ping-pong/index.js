const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const port = process.env.PORT || 3000;

const directory = path.join("/", "usr", "src", "app", "files");
const filePath = path.join(directory, "pong.txt");

fs.mkdirSync(directory, { recursive: true });

const getCounter = () => {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, "0");
    return 0;
  }

  return Number(fs.readFileSync(filePath, "utf8")) || 0;
};

const setCounter = (value) => {
  fs.writeFileSync(filePath, String(value));
};

app.get("/pingpong", (_req, res) => {
  const nextValue = getCounter() + 1;
  setCounter(nextValue);
  res.send(`pong ${nextValue}`);
});

app.get("/pings", (_req, res) => {
  const pings = getCounter();
  res.send(pings);
});

app.listen(port, () => {
  console.log(`Server started in port ${port}`);
});
