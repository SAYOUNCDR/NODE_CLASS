const http = require("http");
const url = require("url");

http
  .createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true).query; // url will be like /?a=1&b=2
    const a = Number(parsedUrl.a);
    const b = Number(parsedUrl.b);
    const sum = a + b;
    res.end(`Sum is ${sum}`);
  })
  .listen(3000, () => {
    console.log("Server listening on port 3000");
  });
