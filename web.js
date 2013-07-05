var express = require('express');
var fs=require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
var rawOut = fs.readFileSync('index.html');
var output = rawOut.toString();
  response.send(output);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
