var express = require('express');
var app = express();
var fs = require("fs");

var http = require('http');

var app = http.createServer(function(req,res){
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ a: 1 }));
});
app.listen(3000);

// > {"a":1}
