var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/app', function(req, res, next) {
  res.render('articles/app', { title: 'Article Management System' });
});

module.exports = router;
