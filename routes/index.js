var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'August Decoration',
    page: 'Home'
  });
});
router.get('/project/politanRive', function(req, res, next) {
  res.render('politanRive', { 
    title: 'August Decoration',
    page: 'Project'
  });
});

module.exports = router;
