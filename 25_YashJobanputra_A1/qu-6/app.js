const fs = require("fs");
const util = require("util");

// Convert fs.unlink callback function into Promise function
const unlinkAsync = util.promisify(fs.unlink);

async function deleteFile() {
    try {
        await unlinkAsync("test.txt");
        console.log("File deleted successfully!");
    } catch (error) {
        console.log("Error:", error.message);
    }
}

deleteFile();