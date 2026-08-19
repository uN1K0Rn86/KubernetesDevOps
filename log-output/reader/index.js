const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

const directory = path.join("/", "usr", "src", "app", "files");
const filePath = path.join(directory, "log.txt");

app.get("/status", (_req, res) => {
  const content = fs.existsSync(filePath)
    ? fs.readFileSync(filePath, "utf8")
    : "File not found";

  res.type("text/plain");
  res.send(content);
});

app.listen(port, () => {
  console.log(`Server started in port ${port}`);
});
