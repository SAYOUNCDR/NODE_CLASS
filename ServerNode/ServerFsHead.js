const http = require("http");

const data = {
  message: "This file's content will be displayed on web page ",
  status: "success",
};
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(data));
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});


