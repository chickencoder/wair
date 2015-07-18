var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.sendFile(__dirname + '/temps/index.html');
});

app.listen(7000);
console.log("Listening on port 7000...");
