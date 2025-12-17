const fs = require('fs')
console.log("start");

try{
  if(fs.existsSync("23.txt")){
    console.log("available");
  }
  else{
    console.log("not available");
  }
}catch(error){
  console.log(error);
}
