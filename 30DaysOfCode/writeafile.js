var filesys = require('fs');
var content = "This is my home page";
filesys.writeFile('myfile.txt',content,(err)=>{
    if(err)
      throw err;
    console.log(content);  
});