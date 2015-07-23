var express = require('express');
var swig    = require('swig');
var fs      = require('fs');
var app = express();

// Require airports.json
var airports = require('./api/airports.js');

// Swig Templates
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/temps');

// Note: true in production!
app.set('view cache', false);

// Route static files
app.use(express.static(__dirname + '/static'));

app.get('/', function(req, res){
  var air = airports.fetchAirports();
  res.render('index', {'airports': air});
});

app.get('/results', function(req, res){
  res.render('results', {});
});

app.get('/about', function(req, res){
  res.render('pages/about', {});
});

app.get('/developers', function(req, res){
  res.render('pages/developers', {});
});

app.get('/news', function(req, res){
  res.render('pages/news', {});
});

app.get('/contact', function(req, res){
  res.render('pages/contact', {});
});

// Test Page
app.get('/test', function(req, res){
  res.render('test', {});
});

app.listen(9000);
console.log("Listening on port 9000...");
