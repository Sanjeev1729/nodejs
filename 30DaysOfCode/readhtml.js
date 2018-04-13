var httpConnection = require('http');
var filesystem = require('fs');

var server = httpConnection.createServer((req,res)=>{
   res.writeHead(200,{"content-type":"text/html"});
   filesystem.readFile('myfilehtml.html',(err,data)=>{
    if(err)
      throw err;
    else  
      res.end(data);
   }); 
});

server.listen(3000,"127.0.0.1",(err)=>{
    if(err)
      throw err;
    console.log("Listening to localhost");  
});