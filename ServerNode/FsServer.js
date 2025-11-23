// reading a file and displaying it on the server

const fs = require("fs");
const http = require("http");

const filePath = "Output.txt";

http
  .createServer((req, res) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        res.end(err);
        return;
      }
      res.end(data);
    });
  })
  .listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
  });
