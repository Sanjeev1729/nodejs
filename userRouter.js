var express = require('express');
var router =express.Router();

router.get('/username',function(req,res){
    res.send("user router handling event");
});

router.post('/',function(req,res){
    res.send("user creation successful");
});
module.exports=router;