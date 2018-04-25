var express = require('express');
var path = require('path');
var mongoClient = require('mongodb').MongoClient;
var app = express();
var bodyParser = require('body-parser');
var localhost = "mongodb://localhost:27017";
app.use('/public', express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.listen(3000,function(){
    console.log("Connection is successful!");
})
app.get('/',function(req,res){
    res.set({'Access-Control-Allow-Origin' : '*'});
    return res.redirect("/public/index.html");
});
app.post('/signup',function(req,res){
    console.log("Request-Object"+req);
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    var phone = req.body.phone;

    var data = {
        "name":name,
        "email":email,
        "password":password,
        "phone":phone,
    };
   
    mongoClient.connect(localhost,(err,client)=>{
        if(err)
         throw err;
        else{
            var db = client.db('users');
            db.collection('userdetails').insertOne(data,(err,collection)=>{
                if(err)
                  throw err;
                else{
                    console.log("One user registered");
                  //  console.log(collection);
                }  
            });
            client.close();
            console.log("DATA is " + JSON.stringify(data) );
            res.set({
                'Access-Control-Allow-Origin' : '*'
            });
            res.redirect('/public/success.html');
        } 
    });
});