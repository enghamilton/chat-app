var express = require('express')
var app = express()

// Rota para a home, seu domínio.
app.get('/', function (req, res) {
  res.render('index', {});
  res.send('hello world in Node JS');
})

// Rota para /produtos
app.get('/produtos', function (req, res) {
  res.send('exibindo produtos!');
})

// Rota para /usuarios
app.get('/usuarios', function (req, res) {
  res.send('exibindo usuários');
})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})
