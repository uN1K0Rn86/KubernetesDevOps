const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

const directory = path.join("/", "usr", "src", "app", "files");
const filePath = path.join(directory, "log.txt");
const pongFilePath = path.join(directory, "pong.txt");

app.get("/status", (_req, res) => {
  const statusContent = fs.existsSync(filePath)
    ? fs.readFileSync(filePath, "utf8")
    : "File not found";

  const pongContent = fs.existsSync(pongFilePath)
    ? fs.readFileSync(pongFilePath, "utf8")
    : "0";

  const content = statusContent + "\n" + "Ping / pongs: " + pongContent;

  res.type("text/plain");
  res.send(content);
});

app.listen(port, () => {
  console.log(`Server started in port ${port}`);
});
