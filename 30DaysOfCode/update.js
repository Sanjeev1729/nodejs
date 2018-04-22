var mongoClient = require('mongodb').MongoClient;
var localhost = "mongodb://localhost:27017";
mongoClient.connect(localhost,(err,client)=>{
    if(err)
      throw err;
    else{
        var db = client.db('users');
        var query = {name:'sanjeevk'}
        var data = {"$set":{name : 'sanjeev',phone:'123456789'}};
        db.collection('userdetails').updateOne(query,data,(err,collection)=>{
          if(err)
            throw err;
            else{
                console.log('update successful!');
                console.log(collection);
            }
        })
    }
    client.close();  
});