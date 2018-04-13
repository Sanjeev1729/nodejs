//js code to create your own server

var http = require('http');
var port=3000
var host='127.0.0.1'
var server=http.createServer((request,response)=>{
    response.writeHead(200,{'Content-Type':'text/plain'});
    console.log("server working");
    response.end('server created successfully!');
});

server.listen(port,host,(error)=>{
   if(error)
    return console.log("Error occured while creating server",error);

      console.log(host+port);
});