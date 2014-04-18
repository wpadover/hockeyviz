var express = require('express');
var router = express.Router();
var Player = require('../models/player.js');

/* GET players listing. */
router.get('/', function(req, res) {
  var name = req.query.name;
  if (name == null || name == ""){
    Player.find(function(err, players){
      if(err) res.send(err);
      res.json(players);
    });
  } else {
    Player.find({'name': new RegExp(name, 'i')}, function(err, players){
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
