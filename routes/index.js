
var fs = require('fs')
var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  var origins = fs.readFileSync("public/texts/origins.html").toString();
  var college = fs.readFileSync("public/texts/college.html").toString();
  var interests = fs.readFileSync("public/texts/interests.html").toString();
  var nyc = fs.readFileSync("public/texts/nyc.html").toString();
  var sports = fs.readFileSync("public/texts/sports.html").toString();
  res.render('home', { title: 'Express',
                       origins: origins,
                       college: college,
                       interests: interests,
                       nyc: nyc,
                       sports: sports });
});

router.get('/hello', function(req, res, next) {
  res.render('index', { title: 'Hello World' })
});

module.exports = router;

