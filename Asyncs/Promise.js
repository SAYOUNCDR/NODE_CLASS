// const getData = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const data = { id: 1, message: "Hello, World!" };
//         resolve(data);
//     }, 2000);
// })

// getData.then((data) => {
//     console.log("Data received:", data);
// }).catch((error) => {
//     console.error("Error:", error);
// });

const checkPromise = new Promise((resolve, reject) => {
  const success = false;
  if (success) {
    resolve("Promise resolved successfully!");
  } else {
    reject("Promise rejected!");
  }
});

checkPromise
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error);
    });
