import fs from "fs";
const SyncReadFilePath = "E:\\INT222-NodeJs\\Asyncs\\read_test.txt";
const SyncWriteFilePath = "E:\\INT222-NodeJs\\Asyncs\\write_test.txt";

try {
  const data = fs.readFileSync(SyncReadFilePath, "utf-8");
  console.log("File Content:", data);
} catch (err) {
  console.error("Error reading file:", err);
}

try {
  fs.writeFileSync(SyncWriteFilePath, "Hello, World! from SyncIO.js");
  console.log("File written successfully.");
} catch (err) {
  console.error("Error writing file:", err);
}
