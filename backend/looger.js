// import fs from "fs";
// import path from "path";

// const logFile = path.join(process.cwd(), "log.txt");

// export const logMessage = (msg) => {
//   const timestamp = new Date().toISOString();
//   fs.appendFileSync(logFile, `[${timestamp}] ${msg}\n`);
// };



// logger.js
import fs from "fs";
import path from "path";

const logFile = path.join(process.cwd(), "log.txt"); // ensures file is in project root

export const logMessage = (msg) => {
  const timestamp = new Date().toISOString();
  try {
    fs.appendFileSync(logFile, `[${timestamp}] ${msg}\n`);
  } catch (err) {
    console.error("Failed to write log:", err);
  }
};

