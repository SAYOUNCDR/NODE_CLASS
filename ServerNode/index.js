// const http = require("http"); // impoting the http module

// create server
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("Hello from node.js server!\n");
// });

// start server
// server.listen(3000, () => {
//   console.log(`Server is running on http://localhost:3000`);
// });




// Other way to make server
// const http = require("http"); // importing the http module
// http
//   .createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("Hello from node.js server!\n");
//   })
//   .listen(4000, () => {
//     console.log(`Server is running on http://localhost:4000`);
//   });



// Another way
const http = require("http"); // importing the http module
const server = http.createServer((req, res) => {
    res.write("This is another way to create server in nodejs");
    res.end();
})

server.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`);
})