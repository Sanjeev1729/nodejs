var express = require('express');
var app = express();
app.listen(3000,function(){
    console.log("Connection established");
});
app.get('/getusername',function(req,res){
    res.send("Request is successful ,status:200");
});

app.post('/createusername',function(req,res){
    res.send("user created in db");
    console.log(res);
    console.log(req);
})