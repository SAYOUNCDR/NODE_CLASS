import fs from "fs";
const filePath = "E:\\INT222-NodeJs\\Asyncs\\read_test.txt";
const writeFilepath = "E:\\INT222-NodeJs\\Asyncs\\write_test.txt";

fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    console.log("File Content:", data);
});

fs.writeFile(writeFilepath, "Hello, World! from AsyncIO.js", (err) => {
    if (err) {
        console.error("Error writing file:", err);
        return;
    }
    console.log("File written successfully.");
});

