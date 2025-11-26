const express = require("express");
const fs = require("fs");
const app = express();

const log = (req, res, next) => {
  const log = `Request method: ${req.method} | url: ${
    req.url
  } | time: ${new Date().toLocaleString()}\n`;
  fs.appendFile("server.log", log, (err) => {
    if (err) {
      console.log("Unable to append to server.log.");
    }
  });

  next();
};

app.use(log);

const checkUser = (req, res, next) => {
  if (req.query.user === "Sayoun") {
    console.log("Acess granted");
    next();
  } else {
    console.log("Acess Denied");
    res.status(403).json({ msg: "Acess denied" });
  }
};

app.use((req, res, next) => {
  console.log(
    `Request method: ${req.method} | url: ${
      req.url
    } | time: ${new Date().toString()}`
  );
  next();
});

app.get("/", (req, res) => {
  res.send(`
        <form action="/dashboard" method="get">
            <input type="text" name="user" placeholder="Enter user"/>
            <button type="submit">Submit</button>
        </form>
    `);
});

app.get("/dashboard", checkUser, (req, res) => {
  const user = req.query.user;
  res.json({ msg: "Welcome to dashboard", user: user });
});

app.listen(3000, () => {
  console.log("Server started at port 3000");
});
