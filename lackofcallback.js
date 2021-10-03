let minimist = require("minimist");
let fs = require("fs");

let args = minimist(process.argv);

//task 1

let t1 = Date.now();

console.log("Task 1 started at" + t1%100000);
let stext = fs.readFileSync(args.source);

let t2 = Date.now();
console.log("Task 1 finished at" + t2%100000);

console.log(t2 - t1)
