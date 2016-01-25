var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/stuff', function(req, res, next) {
  res.render('index', { title: 'Stuff' });
});

module.exports = router;
