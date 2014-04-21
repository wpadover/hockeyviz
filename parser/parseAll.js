var _ = require("underscore");
var teamParser = require('./teamParser');
var mongoose = require("mongoose");
var async = require("async");

//Connect to database
mongoose.connect("mongodb://localhost/hockeyvizdb")

async.each([
  {"url": "ana",  name: "Anaheim Ducks" },
  {"url": "bos",  name: "Boston Bruins" },
  {"url": "buf",  name: "Buffalo Sabres" },
  {"url": "cgy",  name: "Calgary Flames" },
  {"url": "car",  name: "Carolina Hurrinces" },
  {"url": "chi",  name: "Chicago Blackhawks" },
  {"url": "col",  name: "Colorado Avalanche" },
  {"url": "cbj",  name: "Columbus Blue Jackets" },
  {"url": "dal",  name: "Dallas Stars" },
  {"url": "det",  name: "Detroit Red Wings" },
  {"url": "edm",  name: "Edmonton Oilers" },
  {"url": "fla",  name: "Florida Panthers" },
  {"url": "la",   name: "Los Angels Kings" },
  {"url": "min",  name: "Minnesota Wild" },
  {"url": "mtl",  name: "Montreal Canadiens" },
  {"url": "nsh",  name: "Nashville Predators" },
  {"url": "nj",   name: "New Jersey Devils" },
  {"url": "nyi",  name: "New York Islanders" },
  {"url": "nyr",  name: "New York Rangers" },
  {"url": "ott",  name: "Ottawa Senators" },
  {"url": "phi",  name: "Philadelpha Flyers" },
  {"url": "phx",  name: "Phoenix Coyotes" },
  {"url": "pit",  name: "Pittsburgh Penguins" },
  {"url": "sj",   name: "San Jose Sharks" },
  {"url": "stl",  name: "St. Louis Blues" },
  {"url": "tb",   name: "Tampa Bay Lightning" },
  {"url": "tor",  name: "Toronto Maple Leafs" },
  {"url": "van",  name: "Vancouver Canucks" },
  {"url": "wsh",  name: "Washington Capitals" },
  {"url": "wpg",  name: "Winnipeg Jets" }
], function(element, callback){
  teamParser.parse(element["url"], element["name"], callback);    
},function(err){
  if(err) throw err;
  mongoose.disconnect();
});

