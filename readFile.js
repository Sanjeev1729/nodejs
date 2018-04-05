var fs= require('fs');

var callback =function(err,data){
  if(err)
    console.log(err);
  else 
    console.log(data);  
}
fs.readFile("D://jslearning/nodejs/file1",callback);
fs.readFile("D:\\dosAndDonts",callback);