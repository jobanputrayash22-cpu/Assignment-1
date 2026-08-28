const readline = require("readline");
const chatbot = require("./chatbot");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("================================");
console.log("   College Admission Chatbot");
console.log("================================");
console.log("Type 'bye' to exit.\n");

function chat() {

    rl.question("You: ", (message) => {

        const response = chatbot.getResponse(message);

        console.log("Bot:", response);

        if (message.toLowerCase().includes("bye")) {
            rl.close();
        } else {
            chat();
        }

    });
}

chat();