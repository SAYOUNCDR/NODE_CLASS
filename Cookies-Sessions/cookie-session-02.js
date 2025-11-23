const express = require("express");
const session = require("cookie-session");
const app = express();

app.use(
  session({
    name: "session",
    keys: ["secret-key"],
    maxAge: 5 * 6 * 1000,
  })
);

app.get("/setSession", (req, res) => {
  req.session.name = "Sayoun";
  req.session.section = "K23SH";
  req.session.subject = "NodeJS";
  req.session.department = "CSE";

  res.send(`Session set <a href="/getSession"> Get session </a>`);
});

app.get("/getSession", (req, res) => {
  var userName = req.session.name;
  var section = req.session.section;
  var subject = req.session.subject;
  var department = req.session.department;

  res.send(
    `Username: ${userName} \n Section: ${section} \n Subject: ${subject} \n Department: ${department} <a href="/deleteSession">Delete session </a>`
  );
});

app.get("/deleteSession", (req, res) => {
  req.session = null;
  res.send(`The session is deleted <a href="/setSession"> Set session </a>`);
});

app.listen(3000, () => {
  console.log(`Server started`);
});
