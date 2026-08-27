const fs = require("fs");
const archiver = require("archiver");

const output = fs.createWriteStream("compressed.zip");

const archive = archiver("zip", {
    zlib: { level: 9 }
});

output.on("close", () => {
    console.log("Folder compressed successfully!");
    console.log("ZIP size: " + archive.pointer() + " bytes");
});

archive.on("error", (err) => {
    throw err;
});

archive.pipe(output);

archive.directory("files/", false);

archive.finalize();