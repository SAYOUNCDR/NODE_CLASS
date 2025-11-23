const http = require("http");

http
  .createServer((req, res) => {
    function add(a, b) {
      return a + b;
    }
    res.end(`The sum of 5 and 3 is: ${add(5, 3)}`);
  })
  .listen(5000, () => {
    console.log("Server is running on http://localhost:5000");
  });
