const express = require("express");
const app = express();

const port = process.env.PORT || 3001;

app.use(express.json());

let todos = ["Learn Kubernetes", "Deploy app", "Fix bug"];

app.get("/todos", (_req, res) => {
  res.json(todos);
});

app.post("/todos", (req, res) => {
  const text = String(req.body?.text ?? "").trim();

  if (!text) {
    return res.status(400).json({ error: "Text required" });
  }

  if (text.length > 140) {
    return res.status(400).json({ error: "Todo too long" });
  }

  todos.push(text);
  res.status(201).json({ ok: true, text });
});

app.listen(port, () => {
  console.log("Todo-backend running on PORT 3001");
});
