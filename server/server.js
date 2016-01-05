var express = require('express');
var app = express();
var browserify = require ('browserify');
var bodyParser = require('body-parser');

app.use(express.static('client'));

console.log("Server connected.");

app.listen(3000);

module.exports = app;