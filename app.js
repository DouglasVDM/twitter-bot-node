const fs = require("fs");

// this does not block the code of the application
fs.readFile("read-me.txt", "utf-8", function (error, data) {
  fs.writeFile("write.text", data, function (error) {
    if(error) {
      console.log(error)
    }
  })
});
