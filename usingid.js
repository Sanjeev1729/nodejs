var express = require('express');

var app = express();

app.get('/:id([0-9]{5})',function(req,res){
   res.send('success at id'+req.params.id);
});

app.listen(3000,function(req,res){
   console.log("Connection Successful");
});