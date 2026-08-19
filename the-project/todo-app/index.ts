import "dotenv/config";
import express from "express";
import fs from "fs";
import path from "path";

const app = express();
const port = process.env.PORT || 3000;

const directory = path.join("/", "usr", "src", "app", "files");
const filePath = path.join(directory, "randomimage.jpg");
const imageAgeCutoffMs = 10 * 60 * 1000;

fs.mkdirSync(directory, { recursive: true });

const fetchImage = async () => {
  const res = await fetch("https://picsum.photos/1000");
  if (!res.ok) throw new Error("Failed to fetch image");
  const buffer = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(filePath, buffer);
  return buffer;
};

const getImage = async () => {
  if (!fs.existsSync(filePath)) return fetchImage();

  const stat = fs.statSync(filePath);
  const age = Date.now() - stat.mtimeMs;

  if (age > imageAgeCutoffMs) {
    return fetchImage();
  }

  return fs.readFileSync(filePath);
};

app.get("/", (_req, res) => {
  res.sendFile(path.join(process.cwd(), "public", "index.html"));
});

app.get("/random-image", async (_req, res) => {
  try {
    const image = await getImage();
    res.setHeader("Content-type", "image/jpeg");
    res.send(image);
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to fetch image");
  }
});

app.listen(port, () => {
  console.log(`Server started in port ${port}`);
});
