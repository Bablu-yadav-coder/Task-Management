// utils/logger.js
import fs from "fs";
import path from "path";

const logFile = path.join(process.cwd(), "log.txt");

export const logMessage = (msg) => {
  const timestamp = new Date().toISOString();
  const logEntry = `[${timestamp}] ${msg}\n`;

  try {
    fs.appendFileSync(logFile, logEntry, "utf8");
    console.log("✅ Log written to:", logFile);
  } catch (err) {
    console.error("❌ Error writing to log file:", err);
  }
};
