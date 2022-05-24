const child_process = require("child_process");
const fibo15 = require("./run_fibo15");
const fibo30 = require("./run_fibo30");

console.log("1: Start");

const newProcess15 = child_process.spawn("node", ["run_fibo15.js"], {stdio: "inherit"});
const newProcess30 = child_process.spawn("node", ["run_fibo30.js"], {stdio: "inherit"});

console.log("2: End");
