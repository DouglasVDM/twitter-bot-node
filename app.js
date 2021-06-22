const fs = require("fs");

// 1st => read this file
const text = fs.readFileSync("read-me.txt", "utf-8");

// 2nd => take the contents of text variable and push it into write,txt
fs.writeFileSync("write.txt", text);