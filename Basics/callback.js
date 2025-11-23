// Famous callback functions: setTimeout, setInterval, forEach, map, filter, reduce
function greet(name, callback) {
    console.log("Hello, " + name + "!");
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}
greet("Sayoun", sayGoodbye);

// Another way of using callback functions: arrow functions could also use an anonymous functions
greet("0xSYN", () => {
    console.log("See you later!");
})
