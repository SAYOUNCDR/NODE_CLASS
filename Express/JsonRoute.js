const express = require("express");
const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  res.json({ name: "Sayoun", age: 19, Course: "CSE" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
