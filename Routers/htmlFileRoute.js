//serve HTML files based on route

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("HTML/home.html", "utf-8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/html" });
        res.end("<h1>Internal Server Error</h1>");
        return;
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  } else if (req.url === "/about") {
    fs.readFile("HTML/about.html", "utf-8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/html" });
        res.end("<h1>Internal Server Error</h1>");
        return;
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  } else if (req.url === "/contact") {
    fs.readFile("HTML/contact.html", "utf-8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/html" });
        res.end("<h1>Internal Server Error</h1>");
        return;
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1 style='color: red;'>404 Page Not Found</h1>");
  }
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
