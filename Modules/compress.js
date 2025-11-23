import fs from "fs";
import zlib from "zlib";
const readStream = fs.createReadStream(
  "E:\\INT222-NodeJs\\Modules\\compressRead.txt"
);
const writeStream = fs.createWriteStream(
  "E:\\INT222-NodeJs\\Modules\\compressRead.txt.gz"
);

const gzip = zlib.createGzip(); //transform stream
readStream.pipe(gzip).pipe(writeStream);
// read->gzip(compress)->write

// gzip is asynchronous so we need to listen to the finish event
// otherwise it prints console.log immediately despite the file not being compressed yet
writeStream.on("finish", () => {
  console.log("File successfully compressed!");
});
