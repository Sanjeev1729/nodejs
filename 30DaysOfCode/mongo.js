var MongoClient = require('mongodb').MongoClient;
var local = "mongodb://localhost:27017";
MongoClient.connect(local,(err,client)=>{
  if(err)
    throw err;
  else
  var db = client.db('users'); 
  var data = {'name':'sanjeev','password':'123db','id':'1'};
  
  db.collection('userdetails').insertOne(data,(err,collection)=>{
    if(err)
      throw err;
    else{
         console.log('1 row inserted!');
         console.log(collection);
    }  
  });
   client.close();
});

