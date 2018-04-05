var http =require("http");
http.createServer(function(request,response){
    response.setHeader('content-type','plain-text');
    response.writeHead("200","server created",{'content-type':'javascript'});
    response.end("Ok");
}).listen(8081);