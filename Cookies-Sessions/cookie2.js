const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());

// set the cookie
app.get("/setCookie", (req, res) => {
    res.cookie("username", "Sayoun", { maxAge: 60000 }); // This cookie will expire in 1 minute
    res.cookie("age", "25", { maxAge: 60000 }); // This cookie will expire in 1 minute
  res.send("Cookie has been set");
});

// get the cookie
app.get("/getCookie", (req, res) => {
  res.send(`Cookie Value: ${req.cookies.username} , Age: ${req.cookies.age}`);
});

// clear the cookie
app.get("/clearCookie", (req, res) => {
  res.clearCookie("username");
  res.clearCookie("age");
  res.send("Cookie has been cleared");
});

app.listen(4000, () => {
  console.log("Server is running on http://localhost:3000");
});
