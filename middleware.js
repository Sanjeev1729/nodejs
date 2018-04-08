var express = require('express');
var app = express();

app.get('/', function(req, res, next){
    res.send("Middle");
    next();
 });
 
app.use('/', function(req, res){
    console.log('End');
 });

//First middleware before response is sent
app.use(function(req, res, next){
    console.log("Start");
    next();
 });
 
//Route handler



app.listen(3000);