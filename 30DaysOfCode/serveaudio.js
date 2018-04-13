var httpObject = require('http');
var filesys = require('fs');

httpObject.createServer((req,res)=>{
  res.writeHead(200,{"content-type":"video/mp4"});
  filesys.exists('videotest.mp4',(doesexist)=>{
      if(doesexist){
          var rstream = filesys.createReadStream('videotest.mp4');
          rstream.pipe(res);
      }
      else{
          console.log("Page not found");
      }
  });
}).listen(3000);