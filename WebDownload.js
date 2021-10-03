let minimist = require("minimist");
let axios = require("axios");
let fs = require("fs");


let args = minimist(process.argv);
//console.log(args.url);
//console.log(args.dest);

let promise = axios.get(args.url);

promise.then(function(response){
    let html = response.data;
    fs.writeFileSync(args.dest,html,"utf-8");
}).catch(function(err){
    console.log(err);
})