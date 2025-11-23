// Stream flow -> One by one -> Stream flow

import fs from "fs";
const read = fs.createReadStream('E:\\INT222-NodeJs\\Modules\\read.txt', 'utf-8' );
read.on('data', (chunk) => {
    console.log(`${chunk}`);
})