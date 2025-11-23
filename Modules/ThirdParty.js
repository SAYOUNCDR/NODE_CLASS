// This file will contain code that uses a third-party library

// const moment = require('moment');
// console.log("Current Date and Time:", moment().format('YYYY-MM-DD HH:mm:ss'));

// const lodash = require('lodash'); // npm i lodash
// const removedDuplicates = lodash.uniq([1, 2, 2, 3, 4, 4, 5]);
// console.log("After removing duplicates using lodash:", removedDuplicates);

const EventEmitter = require("events"); // Built-in module
const eventEmitter = new EventEmitter();

eventEmitter.on("greet", (name) => {
  console.log("Hello:", name);
});

eventEmitter.on("start", (name) => {
  console.log("Starting:", name);
});

// Emitting events
eventEmitter.emit("greet", "John");
eventEmitter.emit("start", "Application");
