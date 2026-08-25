const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

const directory = path.join("/", "usr", "src", "app", "files");
const filePath = path.join(directory, "log.txt");

app.get("/status", async (_req, res) => {
  const statusContent = fs.existsSync(filePath)
    ? fs.readFileSync(filePath, "utf8")
    : "File not found";

  const pongResponse = await fetch("http://ping-pong-backend-svc:1234/pings");
  const pongContent = await pongResponse.text();

  const content = statusContent + "\n" + "Ping / pongs: " + pongContent;

  res.type("text/plain");
  res.send(content);
});

app.listen(port, () => {
  console.log(`Server started in port ${port}`);
});
