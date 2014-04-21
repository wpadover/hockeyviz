var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Hockey Viz' });
});

router.partials = function(req, res){
  var name = req.params.name;
  res.render('partials/' + name);
};

module.exports = router;
