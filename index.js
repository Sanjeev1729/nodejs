var express = require('express');
var app = express();

var userRouter = require('./userRouter');
app.use('/username',userRouter)

app.listen(3000,function(){
    console.log('connected to 3000');
});