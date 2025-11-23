const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/" || req.url === "/home") {
    res.write("<h1>This is a home page</h1>");
  }
  else if (req.url === "/about") {
    res.write("<h1>This is an about page</h1>");
  }
  else if (req.url === "/contact") {
    res.write("<h1>This is a contact page</h1>");
  }
  else if (req.url === "/services") {
    res.write("<h1>This is a services page</h1>");
  }
  else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h1>404 Page Not Found</h1>");
  }
  res.end();
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
