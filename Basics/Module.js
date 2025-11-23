function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}   

function subtract(a, b) {
  return a - b;
}   

function divide(a, b) {
  return a / b;
}

function sayHello(name) {
    return `Hello, ${name}!`;
}


module.exports = {
  add,
  sayHello,
  multiply,
    subtract,
    divide
};

// exports.add = (a, b) => a + b;
// exports.multiply = (a, b) => a * b;
// exports.subtract = (a, b) => a - b;