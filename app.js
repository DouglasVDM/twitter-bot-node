// console.log("hello world")

// setTimeout(() => {
//   console.log("hi there");
// }, 3000);

let count = 0;

const timer = setInterval(() => {
  count = count + 2
  console.log(`${count} seconds have passed`);
  if (count > 6) {
    clearInterval(timer)
  }
}, 2000);