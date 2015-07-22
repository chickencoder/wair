var express = require('express');
var swig    = require('swig');
var fs      = require('fs');
var app = express();

// Require airports.json
var airports = require('./json/airports.json');

// Swig Templates
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/temps');

// Note: true in production!
app.set('view cache', false);

// Route static files
app.use(express.static(__dirname + '/static'));

app.get('/', function(req, res){
  var aps = [];
  for (var i in airports) {
    aps.push(airports[i]["name"]);
  }
  aps = aps.sort();
  res.render('index', {'airports': aps});
});

app.get('/results', function(req, res){
  res.render('results', {});
});

// Test Page
app.get('/test', function(req, res){
  res.render('test', {});
});

app.listen(9000);
console.log("Listening on port 9000...");
