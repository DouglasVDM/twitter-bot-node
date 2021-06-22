const events = require("events");

const myEmitter = new events.EventEmitter;

myEmitter.on("test", (arg) => {
  console.log(arg);
});

myEmitter.emit("test", "hello world");