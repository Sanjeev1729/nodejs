var filesys = require('fs');
filesys.unlink('data1.txt',(err)=>{
  if(err)
    throw err;
  else
    console.log("Deletion successful");  
});