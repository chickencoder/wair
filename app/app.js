var express = require('express');
var swig    = require('swig');
var app = express();

// Swig Templates
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/temps');

// Note: true in production!
app.set('view cache', false);

// Route static files
app.use(express.static(__dirname + '/static'));

app.get('/', function(req, res){
  res.render('index', {});
});

app.get('/results', function(req, res){
  res.render('results', {});
});

// Test Page
app.get('/test', function(req, res){
  res.render('test', {});
});

app.listen(8000);
console.log("Listening on port 8000...");
