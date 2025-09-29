import fs from "node:fs/promises";

export async function logMessage(message) {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();

    const logText = `${date} ${time} ${message}\n`;

     try {
        await fs.appendFile("log.txt", logText);
    } catch (error) {
        console.log("Error writing to log file:", error.message);
    }
}