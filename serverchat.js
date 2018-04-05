const net = require('net');

const server =net.createServer();

server.listen(9000,()=>{
  console.log("Listening to port 9000");
});

server.on("connection",()=>{
    console.log("Client connected");
})