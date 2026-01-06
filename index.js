const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "REST API is running" });
});

app.get("/api/users", (req, res) => {
  res.json([
    { id: 1, name: "Admin" },
    { id: 2, name: "User" }
  ]);
});

app.post("/api/users", (req, res) => {
  const user = req.body;
  res.status(201).json({
    message: "User created",
    user
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
