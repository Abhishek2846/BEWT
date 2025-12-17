const fs = require('fs')

fs.writeFile("hello.txt","hiii",(err)=>{
  if(err){
    console.log(err);
  }
  else{
      console.log("success");
  }
  
})