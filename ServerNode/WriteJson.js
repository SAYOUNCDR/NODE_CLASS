// Write json data to a json file
const fs = require("fs");

const jsonData = {
  name: "Sayoun",
  age: 20,
  city: "New York",
  course: "Computer Science",
};

const jsonString = JSON.stringify(jsonData);

fs.writeFile("data.json", jsonString, (err) => {
  if (err) {
    console.error("Error writing file:", err);
  } else {
    console.log("JSON data written to file successfully.");
  }
});
