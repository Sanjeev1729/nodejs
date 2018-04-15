var filesys = require('fs');
var data = "File appendment done!";
filesys.appendFile('data1.txt',data,(err)=>{
   if(err)
      throw err;
    else
      console.log(data); 
});