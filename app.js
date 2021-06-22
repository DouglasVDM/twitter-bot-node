const fs = require("fs");

fs.mkdir("my-folder", () => {
  fs.readFile("read-me.txt", "utf-8", (error, data) => {
    fs.writeFile("./my-folder/write-me.txt", data, () => {      
    })
  })
});

// fs.unlink("./my-folder/write-me.txt", () => {  
//   fs.rmdir("my-folder", (error) => {
//     console.log(error);
//   })
// })