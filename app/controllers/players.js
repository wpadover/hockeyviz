var express = require('express');
var router = express.Router();
var Player = require('../models/player.js');
var _ = require("underscore");

/* GET players listing. */
router.get('/', function(req, res) {
  var name = req.query.name;
  var team = req.query.team;
  var queryParams = {};
  if (name != null && name != ""){
    queryParams['name'] = new RegExp(name, 'i');
  }
  if (team != null && team != ""){
    queryParams['team'] = new RegExp(team, 'i');
  }
  if (_.isEmpty(queryParams)){
    Player.find(function(err, players){
      if(err) res.send(err);
      res.json(players);
    });
  } else {
    Player.find(queryParams, function(err, players){
      if (err) res.send(err);
      res.json(players);
    });
  }
});


router.get('/:id', function(req, res){
  Player.findOne({_id: req.params.id}, function(err, player){
    if (err) res.send(err);
    res.json(player);
  });
});

module.exports = router;
