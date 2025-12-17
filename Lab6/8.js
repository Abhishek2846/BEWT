const fs = require('fs')

fs.copyFile("hello.txt","new.txt" , (err)=>{
  if(err){
    console.log(err);
  }
  else{
    console.log("success");
    
  }
})