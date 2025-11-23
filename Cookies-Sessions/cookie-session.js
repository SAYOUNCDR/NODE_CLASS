// Why cookie session is used?
// Cookie-session is used to store small amount of data on the client side
// It is used to store session id on the client side
const express = require("express");
const app = express();

const session = require("cookie-session");

// setup the session
app.use(
  session({
    name: "session",
    keys: ["secret-key"],
    maxAge: 5 * 6 * 1000,
  })
);

app.get("/setSession", (req, res) => {
  req.session.user = "abc";
  req.session.city = "xyz";
  res.send(`session is set! <a href="/getSession"> Get session </a>`);
});

app.get("/getSession", (req, res) => {
  var user = req.session.user;
  var city = req.session.city;

  res.send(
    `Hello! ${user} from ${city} city <a href="/deleteSession">Delete Session </a>`
  );
});

app.get("/deleteSession", (req, res) => {
  req.session = null;
  res.send(`Session deleted <a href="/setSession">Set session </a>`);
});

app.listen(3000, () => {
  console.log("The server is running on port 3000");
});
