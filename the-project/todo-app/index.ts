import "dotenv/config";
import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (_req, res) => {
  res.send(`Server started in port ${port}`);
});

app.listen(port, () => {
  console.log(`Server started in port ${port}`);
});
