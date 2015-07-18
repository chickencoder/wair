var express = require('express');
var app = express();

app.use(express.static(__dirname + '/static'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/temps/index.html');
});

app.listen(7000);
console.log("Listening on port 7000...");
