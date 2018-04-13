
var httpConnection = require('http');
var fileSystem = require('fs');

var server = httpConnection.createServer((req,res)=>{
   res.writeHead(200,{"content-type":"application/json"});
   fileSystem.readFile('jsondata.json',(err,data)=>{
     if(err)
       throw err;
     else
       res.write(data);
    res.end(data.toString());     
   });
});

server.listen(3000,'127.0.0.1',(err)=>{
   if(err)
     console.log(err);
    else 
      console.log("Listening to localhost"); 
});