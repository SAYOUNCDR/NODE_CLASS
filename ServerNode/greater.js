const http = require('http');

http.createServer((req, res) => {
    function isGreater(a, b) {
        if (a > b) {
            return `${a} is greater than ${b}`;
        }
        return `${a} is not greater than ${b}`;
    }
    res.end(`${isGreater(10, 5)}`);
}).listen(3000, () => {
    console.log("Server is running on http://localhost:3000");

});