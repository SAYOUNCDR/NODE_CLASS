const express = require("express");
const app = express();

// middleare 1
app.use((req, res, next) => {
  console.log("Middleware 01: isRunning");
  next();
});

// middleware 2
app.use((req, res, next) => {
  console.log("Middleware 02: isRunning");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Sever is runnning");
});
