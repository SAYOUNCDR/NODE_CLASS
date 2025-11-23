const http = require("http");
const fs = require("fs");

let content = "";
fs.readFile("content.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  content = data;
});

console.log(content);

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<h1>Welcome to the Home Page ${content}</h1>`);
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<h1>About Us ${content}</h1>`);
  } else if (req.url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<h1>Contact Us ${content}</h1>`);
  } else if (req.url === "/compress") {
    res.writeHead(200, { "Content-Type": "text/html" });

    const readStream = fs.createReadStream("content.txt");
    const writeStream = fs.createWriteStream("content.txt.gz");
    const zlib = require("zlib");
    const gzip = zlib.createGzip();
    readStream.pipe(gzip).pipe(writeStream);

    writeStream.on("finish", () => {
      res.end(`<h1>Compress Page ${content}</h1>`);
    });
  } else if (req.url === "/decompress") {
    res.writeHead(200, { "Content-Type": "text/html" });
    const readStream = fs.createReadStream("content.txt.gz");
    const writeStream = fs.createWriteStream("decompressed_content.txt");
    const zlib = require("zlib");
    const gunzip = zlib.createGunzip();
    readStream.pipe(gunzip).pipe(writeStream);
    writeStream.on("finish", () => {
      fs.readFile("decompressed_content.txt", "utf-8", (err, data) => {
        if (err) {
          console.error("Error reading decompressed file:", err);
          res.end(`<h1>Decompress Page Error</h1>`);
          return;
        }
        res.end(`<h1>Decompress Page ${data}</h1>`);
      });
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end(`<h1>404 Not Found</h1>`);
  }
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
