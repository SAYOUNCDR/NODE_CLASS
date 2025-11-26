const fs = require('fs')

const writejsonFilePath = "D://INT222-NodeJs//Modules//write.json";

const employeeData = {
  name: "Sayoun",
  emp_id: "12",
  salary: 67000,
  department: "IT",
};

const jsonContent = JSON.stringify(employeeData, null, 2);
fs.writeFile(writejsonFilePath, jsonContent, (err) => {
  if (err) {
    console.error("Error writing file:", err);
    return;
  }
  console.log("JSON file written successfully.");
});
