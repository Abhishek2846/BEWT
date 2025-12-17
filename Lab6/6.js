const fs = require('fs')

fs.mkdir("hello.txt", (err)=>{
  if(err){
    if(err.code === 'EEXIST'){
      console.log("Already Exists");
    }
    else{
      console.log(err);
      
    }
  }
  else{
    console.log("successfull");
    
  }
})