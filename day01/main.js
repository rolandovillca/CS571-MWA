const child_process = require("child_process");
const fibo15 = require("./fibonacci15");
const fibo30 = require("./fibonacci30");

console.log("1: Start");

const newProcess30 = child_process.spawn("node", ["fibonacci15.js"], {stdio: "inherit"});
const newProcess15 = child_process.spawn("node", ["fibonacci30.js"], {stdio: "inherit"});

console.log("2: End");


