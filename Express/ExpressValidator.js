const express = require("express");
const app = express();
const fs = require("fs");
const { body, validationResult } = require("express-validator");

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(
    `
    <form action="/submit" method="post">
        <input type="text" name="email" placeholder="Enter your Email">
        <input type="text" name="Dept" placeholder="Enter your Dept">
        <input type="text" name="section" placeholder="Enter your Section">
        <input type="number" name="roll" placeholder="Enter your roll number">
        <input type="text" name="address" placeholder="Enter your Address">
        
        <button type="submit"> Send </button>
    </form>
    `
  );
});

app.post(
  "/submit",
  [
    body("email")
      .isEmail()
      .trim()
      .normalizeEmail()
      .withMessage("Invalid Email Format"),
    body("section")
      .isLength({ min: 5 })
      .withMessage("Section length is should be greater than 5"),
    body("Dept")
      .isLength({ min: 8 })
      .withMessage("Department length should be greater than 8"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const email = req.body.email;
    const Dept = req.body.Dept;
    const section = req.body.section;
    const roll = req.body.roll;
    const address = req.body.address;

    const content = `Email: ${email} | Dept: ${Dept} | Section: ${section} | Roll Number: ${roll} | Address: ${address} \n`;

    fs.appendFile("file.txt", content, (err) => {
      if (err) {
        res.send(`Error saving file ${err}`);
      }
      res.send(`File saved sucessfully`);
    });
  }
);

const PORT = 4001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
