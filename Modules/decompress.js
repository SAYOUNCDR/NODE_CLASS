import fs from "fs";
import zlib from "zlib";
const readStream = fs.createReadStream(
  "E:\\INT222-NodeJs\\Modules\\compressRead.txt.gz"
);
const writeStream = fs.createWriteStream(
  "E:\\INT222-NodeJs\\Modules\\decompressRead.txt"
);

const gunzip = zlib.createGunzip(); //transform stream
readStream.pipe(gunzip).pipe(writeStream);
// read->gunzip(decompress)->write

writeStream.on("finish", () => {
  console.log("File successfully decompressed!");
});
