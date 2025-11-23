const express = require("express");
const app = express();
const port = 3000;

// Arithmetic code
app.get("/", (req, res) => {
  res.send(`
    <form action="/Arithmetic" method="get">
      <input type="number" name="num1" placeholder="First Number" required />
      <input type="number" name="num2" placeholder="Second Number" required />
      <button type="submit">Do Calculations</button>
    </form>
  `);
});

app.get("/Arithmetic", (req, res) => {
  const num1 = Number(req.query.num1);
  const num2 = Number(req.query.num2);
  const sum = num1 + num2;
  const difference = num1 - num2;
  const product = num1 * num2;
  const quotient = num2 !== 0 ? num1 / num2 : "undefined (division by zero)";

  res.send(
    `The sum of ${num1} and ${num2} is ${sum}. The difference is ${difference}, the product is ${product}, and the quotient is ${quotient}.`
  );
});

// Greet input and output code
app.get("/welcome", (req, res) => {
  res.send(`<form action="/greet" method="get">
      <input type="text" name="name" placeholder="Enter your name" required />
      <button type="submit">Submit</button>
    </form>`);
});

app.get("/greet", (req, res) => {
  const name = req.query.name;
  res.send(`Welcome to the site, ${name}!`);
});

// Code below is for Percentage cnt
app.get("/admission", (req, res) => {
  res.send(`
    <form action="/admit" method="get">
        <input type="text" name="name" placeholder="Name" required />
        <input type="number" name="marksObtained" placeholder="Marks Obtained" required />
        <input type="number" name="totalMarks" placeholder="Total Marks" required />
        <button type="submit">Check Percentage</button>
    </form>
  `);
});

app.get("/admit", (req, res) => {
  const name = req.query.name;
  const marksObtained = Number(req.query.marksObtained);
  const totalMarks = Number(req.query.totalMarks);
  const percentage = (marksObtained / totalMarks) * 100;

  res.send(`Hello ${name}, you have scored ${percentage.toFixed(2)}%.`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
