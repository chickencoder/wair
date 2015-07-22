var express = require('express');
var swig    = require('swig');
var fs      = require('fs');
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
  var file;
  fs.readFile(__dirname + '/eu.json', 'utf8', function(err, data){
    if (err) {
      console.log(err);
    }
    file = data.toString();
  });

  var airports = JSON.parse(file);
  for (var a in airports) {
    console.log(airports[a]);
  }
  res.render('index', {'airports': {}});
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
