var express = require('express');
var path = require('path');
var bodyparser = require('body-parser');

var app = express();

app.use(express.static(path.join(__dirname,'../static')));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

app.listen(3000, function(){
  console.log('BarkJS started.')
})