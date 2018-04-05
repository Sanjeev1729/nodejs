const server = require('dns');
console.log(server.getServers());

var callback =function(error,address,family){
  console.log(error);
  console.log(address);
  console.log(family);
}
server.lookup("www.thefacebookwa.com",callback);