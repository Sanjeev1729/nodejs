var express = require('express');
var app =express();

app.set('view-engine','pug');
app.set('views','./views')

app.get('/view',function(req,res){
  res.render('firstView');
});

app.listen(3000);