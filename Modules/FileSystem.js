import fs from "fs";
const filePath = "E:\\INT222-NodeJs\\Modules\\read.txt";
const writeFilePath = "E:\\INT222-NodeJs\\Modules\\write.txt";

fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File content:", data);
});

fs.writeFile(writeFilePath, "Hello, From Node.js!", (err) => {
  if (err) {
    console.error("Error writing file:", err);
    return;
  }
  console.log("File written successfully.");
});
