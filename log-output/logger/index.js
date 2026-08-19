const fs = require("fs");
const path = require("path");

const randomString = Math.random().toString(36).substring(2, 18);

const directory = path.join("/", "usr", "src", "app", "files");
const filePath = path.join(directory, "log.txt");

fs.mkdirSync(directory, { recursive: true });

setInterval(() => {
  const line = `${new Date().toISOString()}: ${randomString}\n`;
  fs.appendFileSync(filePath, line);
  console.log(line.trim());
}, 5000);
