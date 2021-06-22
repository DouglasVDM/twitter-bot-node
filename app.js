const fs = require("fs");

const text = fs.readFileSync("read-me.txt", "utf-8");

console.log(text);