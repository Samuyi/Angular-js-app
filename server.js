var express = require('express');

var app = express();

app.use('/content', express.static('content'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.listen(3000);
