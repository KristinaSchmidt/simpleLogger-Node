const fs= require("fs");

function logMessage(message) {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();

    const logText = `${date} ${time} ${message}\n`;

    fs.appendFile("log.txt", logText, (err) => {
        if(err) {
            console.error("Error writing to log file:", err);
        }
    });
}

module.exports = {logMessage};