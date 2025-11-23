const http = require("http");
const url = require("url");

// Create a server that multiplies two numbers passed as query parameters
// http
//   .createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true).query; // url will be like /?a=1&b=2
//     const a = Number(parsedUrl.a);
//     const b = Number(parsedUrl.b);
//     const product = a * b;
//     res.end(`Product is ${product}`);
//   })
//   .listen(4000, () => {
//     console.log("Server listening on port 4000");
//   });

// Create a server that that prints welcome message with name passed as query parameter
// http
//     .createServer((req, res) => {
//         const parsedUrl = url.parse(req.url, true).query; // url will be like /?name=John
//         const name = parsedUrl.name || "Guest";
//         res.end(`Welcome, ${name}!`);
//     })
//     .listen(4000, () => {
//         console.log("Server listening on port 4000");
//     });

// Check if a number passed as query parameter is even or odd
http
  .createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true).query;
    const num = Number(parsedUrl.num);

    function isEvenorOdd(num) {
      if (num % 2 === 0) return `${num} is even`;
      else return `${num} is odd`;
    }

    res.end(`${isEvenorOdd(num)}`);
  })
  .listen(4000, () => {
    console.log("Server listening on port 4000");
  });
