// node CricInfoExtractor.js --source=https://www.espncricinfo.com/series/icc-cricket-world-cup-2019-1144415/match-results --datafolder="data" --excel="Worldcup.csv"
let minimist = require("minimist");
let axios = require("axios");
let excel = require("excel4node");
let fs = require("fs");
let jsdom = require("jsdom");
let pdf = require("pdf-lib");
const { matches } = require("lodash");

let args = minimist(process.argv);
//console.log(args.source);

let axiosKaPromise = axios.get(args.source);
axiosKaPromise.then(function (response) {
  let html = response.data;
  //console.log(html);
  let dom = new jsdom.JSDOM(html);
  let document = dom.window.document;
  let macthes = [];
  let matchDivs = document.querySelectorAll("div.match-score-block");
  //console.log(matchDiv.length); total match mil gye yha !!
  for (let i = 0; i < matchDivs.length; i++) {
    let matchDiv = matchDivs[i];
    let match = {
      t1 = "",
      t2 = "",
      t1s = "",
      t2s = "",
      result = ""
    };
    let resultspan = matchDiv.querySelector("div.status>span");
    match.result = resultspan.textContent;
    let teamParas = matchDiv.querySelectorAll("div.name-detail>p.name");
    match.t1 = teamParas[0].textContent;
    match.t2 = teamParas[1].textContent;
    let scoreSpans = matchDiv.querySelectorAll("div.score-detail>span");
    if (scoreSpans == 2) {
      match.t1s = scoreSpans[0].textContent;
      match.t2s = scoreSpans[1].textContent;
    }
    else if (scoreSpans == 1) {
      match.t1s = scoreSpans[0].textContent;
      match.t2s = "";
    }
    else {
      match.t1s = "";
      match.t2s = "";
    }
    matches.push(match);
    let matchesJSON = JSON.stringify(matches);
    fs.writeFileSync("matches.json",matchesJSON,"utf-8");
    let team = [];
    for (let i=0;i<matches.length;i++){
      
    }
  }
})