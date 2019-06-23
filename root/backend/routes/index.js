var express = require('express');
var router = express.Router();

var vision = require('../controller/vision.controller');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/return_json', vision.return_json);

module.exports = router;
