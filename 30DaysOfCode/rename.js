var filesys = require('fs');
filesys.rename('data.txt','content.txt',(err)=>{
   if(err)
      throw err;
    else
      console.log("File renamed");  
});