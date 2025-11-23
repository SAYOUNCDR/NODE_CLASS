import fs from "fs";

const filePath = "E:\\INT222-NodeJs\\Modules\\read.json";

fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  const jsonData = JSON.parse(data);
  console.log("Student Data:", jsonData);
});
