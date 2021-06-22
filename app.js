const fs = require("fs");

// this does not block the code of the application
fs.readFile("read-me.txt", "utf-8", function (error, data) {
  console.log(data);
  console.log(error);
});

// this code still fires while waiting on the file to read
console.log("hello there");