// Global object: console
console.log("Hello from NodeJS");

// Global variable: __dirname
console.log("Directory:", __dirname);

// Global variable: __filename
console.log("File:", __filename);

// Global object: process
console.log("Process ID:", process.pid);

// Global function: setTimeout()
setTimeout(() => {
    console.log("This message is printed after 2 seconds.");
}, 2000);

// Command line arguments
console.log("Command Line Arguments:");

console.log(process.argv);