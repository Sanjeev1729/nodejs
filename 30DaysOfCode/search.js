var mongoClient = require('mongodb').MongoClient;
var localhost = 'mongodb://localhost:27017';
mongoClient.connect(localhost,(err,client)=>{
   if(err)
     throw err;
   else{
       var db = client.db('users');
       db.collection('userdetails').find({}).toArray((err,data)=>{
          if(err)
             throw err;
          else{
              console.log('search successful!');
              console.log(data);
          }   
       })
       client.close();
   }  
})