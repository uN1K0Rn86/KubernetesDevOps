const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

const randomString = Math.random().toString(36).substring(2, 18);

setInterval(() => {
  console.log(`${new Date().toISOString()}:`, randomString);
}, 5000);

app.get("/status", (_req, res) => {
  res.json({
    timestamp: new Date().toISOString(),
    randomString,
  });
});

app.listen(port, () => {
  console.log(`Server started in port ${port}`);
});
