var request = require('request');
var cheerio = require('cheerio');
var Player = require('../app/models/player.js');
var _ = require("underscore");
var mongoose = require("mongoose");

request("http://www.extraskater.com/players/standard?team=nyr&season=2013&sit=all", function(err, resp, body) {
  if (err)
    throw (err);

  //Connect to database
  mongoose.connect("mongodb://localhost/hockeyvizdb");
  $ = cheerio.load(body);
  
  var statSkipCount = 0;
  var stats = [];
  
  //Figure out what our stats are, and where they are
  $("table thead th").each(function(index){
    var abbr = $(this).find("abbr");
    if (abbr != null && abbr.length > 0){
      stats.push({"description":abbr.attr('title'), 'stat': abbr.text()});
    } else {
      statSkipCount++;
    }
  });
  
  console.log("***********");
  console.log("USING STATS");
  console.log("***********");
  _.each(stats, function(element){
    console.log(element['stat'] + "(" + element['description'] + ")");
  });

  var PLAYER_NAME_COL = 1;  //Magic number
  var players = [];

  var STAT_MAPPER = {
    "GP" : "gamesPlayed",
    "G": "goals",
    "A" : "assists",
    "P" : "points",
    "A1" : "primaryAssists",
    "A2" : "secondaryAssists",
    "P1" : "primaryPoints",
    "TOI/60": "atoiPer60",
    "S" : "shots",
    "MS" : "missedShots",
    "BS" : "blockedShotsFor",
    "CF" : "corsiFor",
    "FF" : "fenwickFor",
    "FOW" : "faceoffsWon",
    "FOL" : "faceoffsLost",
    "FO%" : "faceoffPercentage",
    "Pen" : "penaltiesTaken",
    "PenD" : "penaltiesDrawn",
    "Pen +/-" : "penaltyPlusMinus",
    "ShB" : "shotsAgainstBlocked",
    "HitF" : "hitsFor",
    "HitA" : "hitsAgainst",
    "Hit +/-" : "hitsPlusMinus"
  }
  //Find our players
  $("table tbody tr").each(function(rIndex){
    var thisPlayer = {};
    var statCounter = 0;
    $(this).find("td").each(function(cIndex){
      if (cIndex == PLAYER_NAME_COL){
        var playerName = $(this).find("td a").text();
        thisPlayer.name = playerName;
        console.log("\n\n");
        console.log("************************");
        console.log("Parsing Stats for: " + playerName);
        console.log("************************");
      }
      if (cIndex >= statSkipCount){
        var thisStat = $(this).text();
        //Figure out what stat we're looking at, make it a number (remove % sign)
        thisPlayer[STAT_MAPPER[stats[statCounter]['stat']]] = parseFloat(thisStat.replace("%", ""));
        statCounter++;
      }
    });
    var player = new Player(thisPlayer);
    var playerObject = player.toObject();
    delete playerObject._id;
    Player.update({name: player.name}, playerObject, {upsert: true}, function(err){
      if (err){
        throw err;
      } else {
        console.log("Persisted " + player);
      }
    });
  });
});

