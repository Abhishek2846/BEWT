const fs = require('fs')

try{
  const data = fs.readFileSync("hello.txt")
  console.log(data.toString());
}catch(error){
  console.log(error);
}