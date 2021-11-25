// node CricInfoExtractor.js --source=https://www.espncricinfo.com/series/icc-cricket-world-cup-2019-1144415/match-results --datafolder="data" --excel="Worldcup.csv"
let minimist = require("minimist");
let axios = require("axios");
let excel = require("excel4node");
let fs = require("fs");
let jsdom = require("jsdom");
let pdf = require("pdf-lib");

let args = minimist(process.argv);
//console.log(args.source);

let axiosKaPromise = axios.get(args.source);
axiosKaPromise.then(function(response){
  let html = response.data;
  //console.log(html);
  let dom = new jsdom.JSDOM(html);
  let document = dom.window.document;
  let macthes=[];
  let match= {};
  let matchDiv = document.querySelectorAll("div.match-score-block");
  //console.log(matchDiv.length); total match mil gye yha !!
})