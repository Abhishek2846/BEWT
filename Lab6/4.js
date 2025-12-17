const fs = require('fs')

fs.appendFile("hello.txt","\n hiiiiiiiiii" , (err)=>{
  if(err){
    console.log(err);
  }
  else{
    console.log("success");
    
  }
})