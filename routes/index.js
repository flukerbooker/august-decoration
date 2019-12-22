var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'August Decoration',
    page: 'Home'
  });
});
/* GET project */
router.get('/project/politanRive', function(req, res, next) {
  res.render('politanRive', { 
    title: 'August Decoration',
    page: 'Project'
  });
});

router.get('/project/politanBreeze', function(req, res, next) {
  res.render('politanBreeze', { 
    title: 'August Decoration',
    page: 'Project'
  });
});

router.get('/project/supremeCourt', function(req, res, next) {
  res.render('supremeCourt', { 
    title: 'August Decoration',
    page: 'Project'
  });
});

router.get('/project/saleGallery', function(req, res, next) {
  res.render('saleGallery', { 
    title: 'August Decoration',
    page: 'Project'
  });
});

router.get('/project/theTreeRioBang-Aor', function(req, res, next) {
  res.render('theTreeRioBang-Aor', { 
    title: 'August Decoration',
    page: 'Project'
  });
});

router.get('/project/residenceMetropole', function(req, res, next) {
  res.render('residenceMetropole', { 
    title: 'August Decoration',
    page: 'Project'
  });
});

router.get('/project/metropoleSukhumvit', function(req, res, next) {
  res.render('metropoleSukhumvit', { 
    title: 'August Decoration',
    page: 'Project'
  });
});

router.get('/project/theTreeInterchangeBangpho', function(req, res, next) {
  res.render('theTreeInterchangeBangpho', { 
    title: 'August Decoration',
    page: 'Project'
  });
});

router.get('/project/hotelMuse', function(req, res, next) {
  res.render('hotelMuse', { 
    title: 'August Decoration',
    page: 'Project'
  });
});

module.exports = router;
