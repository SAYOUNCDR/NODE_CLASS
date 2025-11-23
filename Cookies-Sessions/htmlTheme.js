const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/theme.html");
});

app.post("/setTheme", (req, res) => {
  var theme2 = req.body.theme1;
  res.cookie("theme", theme2);
  res.send(`Check theme <a href="/getTheme">here</a>`);
});

app.get("/getTheme", (req, res) => {
  var theme = req.cookies.theme;
  if (theme) {
    res.send(
      `Your selected theme is ${theme}. <a href="/">Home</a>`
    );
  } else {
    res.send(`No theme selected. <a href="/">Home</a>`);
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
