const fs = require("fs");

// 1. Create and write a file
fs.writeFileSync("example.txt", "Hello NodeJS!");

console.log("File created successfully.");

// 2. Read the file
const data = fs.readFileSync("example.txt", "utf8");

console.log("File content:", data);

// 3. Append data
fs.appendFileSync("example.txt", "\nWelcome to File System module.");

console.log("Data appended successfully.");

// 4. Read updated file
const updatedData = fs.readFileSync("example.txt", "utf8");

console.log("Updated content:");
console.log(updatedData);

// 5. Check if file exists
if (fs.existsSync("example.txt")) {
    console.log("File exists.");
}

// 6. Rename the file
fs.renameSync("example.txt", "newexample.txt");

console.log("File renamed successfully.");