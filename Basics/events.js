var EventEmitter = require("events");
var obj = new EventEmitter();

obj.once("marketOpen", (msg) => {
  console.log(msg);
});

obj.on("marketClose", (msg) => {
  console.log(msg);
});

obj.addListener("marketRunning", (msg) => {
  console.log("This will only appear once: " + msg);
});

// obj.emit("marketOpen", "The market is now open!"); // obj.emit('event', <message>) triggers the event
// obj.emit("marketRunning", "The market is running smoothly."); // obj.emit('event', <message>) triggers the event
// obj.emit("marketRunning", "The market is experiencing high volatility."); // This will not trigger the event again
// obj.emit("marketClose", "The market is now closed!"); // obj.emit('event', <message>) triggers the event

// console.log(obj.getMaxListeners()); // Default is 10
// obj.setMaxListeners(15); // Increase the limit of listeners to 15

// for (let i = 0; i < 14; i++) {
//   obj.addListener("weather", (msg) => {
//     console.log(msg);
//   });
// }

// obj.emit("weather", "It's sunny today!"); 



var func1 = () =>{
  console.log("Function 1 executed");
}

var fun2 = () => {
    console.log("Function 2 executed");
}

obj.addListener('marketBuzz', func1);
obj.addListener('marketBuzz', fun2);
obj.emit('marketBuzz'); // Both functions will be executed

obj.removeListener('marketBuzz', func1);
obj.emit('marketBuzz'); // Only Function 2 will be executed


obj.removeAllListeners('marketBuzz'); // Remove all listeners for 'marketBuzz'
obj.emit('marketBuzz'); // No output, as all listeners have been removed