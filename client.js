const net= require('net');

var client = net.connect(9000,function(){
    console.log("Connected to server");
});

client.on('data',(data)=>{
  console.log(data);
  client.end();
})

client.on('end',()=>{
    console.log("Disconnected");
})