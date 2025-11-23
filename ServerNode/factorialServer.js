const http = require('http');

// Factorial function

http.createServer((req, res) => {
    function factorial(n) {
        if (n === 0 || n === 1) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
    }
    res.end(`Factorial of 3 is ${factorial(3)}`);
}).listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});