const express = require("express");
const app = express();

const { body, validationResult } = require("express-validator");

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(` 
        <form action="/validatedata" method="post">
            <label>Username:</label>
            <input type="text" name="username" required />
            <br/>
            <label>Email:</label>
            <input type="text" name="email" required />
            <br/>
            <label>Password:</label>
            <input type="password" name="password" required />
            <br/>
            <button type="submit">Submit</button>
        </form>
    `);
});

// app.post("/route", [middleware/validation], (req, res) => {})
app.post(
  "/validatedata",
  [
    body("email")
      .isEmail()
      .trim()
      .normalizeEmail()
      .withMessage("Invalid email format"),

    body("password")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters long"),
    body("username")
      .trim()
      .isLength({ min: 5 })
      .withMessage("Username must be at least 5 characters long"),
  ],

  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send("Data is valid");
  }
);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
