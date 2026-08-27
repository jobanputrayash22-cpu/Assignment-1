function getResponse(message) {

    message = message.toLowerCase();

    if (message.includes("admission")) {
        return "Admissions are open for the current academic year.";
    }

    if (message.includes("course")) {
        return "We offer BCA, BSc Computer Science and MSc IT courses.";
    }

    if (message.includes("fees")) {
        return "Please contact the college office for detailed fee information.";
    }

    if (message.includes("timing")) {
        return "College timings are 9:00 AM to 4:00 PM.";
    }

    if (message.includes("hello") || message.includes("hi")) {
        return "Hello! How can I help you?";
    }

    if (message.includes("bye")) {
        return "Goodbye! Have a nice day.";
    }

    return "Sorry, I don't understand your question.";
}

module.exports = {
    getResponse
};