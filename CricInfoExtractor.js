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
})