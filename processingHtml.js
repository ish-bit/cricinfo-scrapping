//node processingHtml.js --source=download.html

let minimist = require("minimist");
let fs = require("fs");
let jsdom = require("jsdom");
//will load html and prepare the dom for the prgrammer just like a browser would have.

let args = minimist(process.argv);
//console.log(args.source)
fs.readFile(args.source,"utf-8",function(err,html){
 
  let JSDOM = jsdom.JSDOM; 
 let dom = new JSDOM(html);
 let document = dom.window.document; 
 
 let descs = document.querySelectorAll("div.match-info > div.description")
 //we will get all div's with class description whose parent is a div with clsass description match-info
  for(let i=0;i < descs.length;i++){
    console.log(descs[i].textContent);
  }

  
});
