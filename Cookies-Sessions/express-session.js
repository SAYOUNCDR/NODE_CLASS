const express = require("express");
const session = require("express-session");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "Super-secret-key",
    resave: false,
    saveUninitialized: true,
  })
);

app.get("/", (req, res) => {
  res.send(`
        <form method="post" action="/login">
            <input type="text" name="username" placeholder="Enter Username" required/>
            <button type="submit">Login</button>
        </form>

        <br>
        <a href="/profile"> Go to Profile </a>
        `);
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  req.session.username = username;
  res.send(
    `User logged in as ${username} <a href="/profile"> Go to Profile </a> | <a href="/welcome"> Welcome Page </a>`
  );
});

app.get("/profile", (req, res) => {
  if (req.session.username) {
    res.send(
      `Welcome to your profile, ${req.session.username}! <a href="/logout">Logout</a>`
    );
  } else {
    res.send('You are not logged in. <a href="/">Login</a>');
  }
});

app.get("/welcome", (req, res) => {
  if (req.session.username) {
    res.send(
      `Welcome back, ${req.session.username}! <a href="/logout">Logout</a>`
    );
  } else {
    res.send('Welcome, guest! <a href="/">Login</a>');
  }
});

app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.send("Error logging out");
    }
    res.send('You have been logged out. <a href="/">Login</a>');
  });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
