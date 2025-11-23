const express = require("express");
const app = express();
const fs = require("fs");
app.use(express.urlencoded({ extended: true }));

const PORT = 4000;

app.get("/", (req, res) => {
  res.send("Hello from the Router!");
});

app.get("/about", (req, res) => {
  res.send("This is the about page of the Router.");
});

app.get("/contact", (req, res) => {
  res.send(
    'Contact us at <a href="mailto:contact@router.com">contact@router.com</a>'
  );
});

app.get("/writeFile", (req, res) => {
  res.send(`
      <form action="/saveFile" method="post">
      <input type="text" name="name" placeholder="Name" required />
      <input type="text" name="email" placeholder="Email" required />
      <button type="submit">Save File</button>
      </form>
    `);
});

app.post("/saveFile", (req, res) => {
  const content = `${req.body.name} ${req.body.email} \n`;

  fs.appendFile("file.txt", content, (err) => {
    if (err) {
      return res.send("Error writing file: " + err.message);
    }
    res.send("File saved successfully!");
  });
});

app.listen(PORT, () => {
  console.log(`Router is running on http://localhost:${PORT}`);
});
