const http = require("http");
const fs = require("fs");

// Read txt file
// write on file and serve JSON response
// should server three html files

let content = "";
fs.readFile("contenttext.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  content = data;
});

const jsonData = {
  name: "Sayoun Parui",
  age: 20,
  city: "Punjab",
};

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`<h1>Home Page</h1>`);
  } else if (req.url === "/readfile") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write(content);
  } else if (req.url === "/json") {
    fs.writeFile("data.json", JSON.stringify(jsonData), (err) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Internal Server Error" }));
        return;
      }
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(jsonData));
    });
  } else if (req.url === "/abouthtml") {
    fs.readFile("about.html", "utf-8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/html" });
        res.end("<h1>Internal Server Error</h1>");
        return;
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  } else if (req.url === "/contacthtml") {
    fs.readFile("contact.html", "utf-8", (err, data) => {
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
