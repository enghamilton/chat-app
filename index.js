var PORT = process.env.PORT || 5000;
var express = require('express');
var app = express();

var http = require('http');
var server = http.Server(app);

//app.use(express.static('client'));
app.get('/', function (req, res) {
  //res.send('Hello World!');
  //res.json({ username: 'user 01' })
  res.json({ "products":[{"pid":"1","name":"Pizza Portuguesa1","price":"23.50","description":"Queijo mussarela, presunto, ovos, ervilhas, palmito, cebola, oregano, azeitona."},{"pid":"2","name":"pizza 2","price":"23.99","description":"ingrediente 2"},{"pid":"3","name":"pizza 1","price":"23.00","description":"ingrediente 1"},{"pid":"4","name":"pizza 3","price":"12.00","description":"ingrediente da pizza 3"}],"success":1 })
});

app.listen(5000, function () {
  console.log('Example app listening on port 3000!');
});

server.listen(PORT, function() {
  console.log('Chat server running');
});
