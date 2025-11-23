// Create a function outside createServer and use it inside createServer
const http = require("http");

function greet(name) {
  return `<h1>Hello, ${name}!</h1>`;
}

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(greet("Sayoun"));
});

server.listen(4000, () => {
  console.log("Server is running on http://localhost:4000");
});
