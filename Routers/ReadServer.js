const http = require("http");
const fs = require("fs");

// function to include message
function showAndSave(res) {
  const message = "Hello from ReadServer! This message is saved to a file and sent as a response.";

  //write message in the file
    fs.writeFile("readServerMessage.txt", message, (err) => {
      
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Internal Server Error");
      return;
    }
    //send message as response
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(message);
  });
}

const server = http.createServer((req, res) => {
  if (req.url === "/read") {
    showAndSave(res);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
