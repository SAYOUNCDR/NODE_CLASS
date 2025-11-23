import fs from "fs";
const write = fs.createWriteStream('E:\\INT222-NodeJs\\Modules\\read.txt');
write.write('This is test data insrted from StreamWrite.js file to read.txt and will be used to read from StreamRead.js');
write.end();