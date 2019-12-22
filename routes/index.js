var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'August Decoration',
    page: 'Home'
  });
  res.redirect('/');
});

module.exports = router;
