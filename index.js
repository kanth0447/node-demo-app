var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World from demo by Indium on 04-01-2023');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening on port %s', port);
});
