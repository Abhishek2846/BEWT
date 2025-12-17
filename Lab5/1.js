const child_process = require('child_process');
const { log } = require('console');
const {version} = require('os');

child_process.exec("node --version",(error,stdout,stderr)=>{
  if(error){
    console.log("Error from the error");
  }
  if(stderr){
    console.log("Error from the stderr");
  }
    console.log(`Node Version is:${stdout}`);
  
})

child_process.exec("python p1.py",(error,stdout,stderr)=>{
  if(error){
    console.log("Error from the error");
  }
  if(stderr){
    console.log("Error from the stderr");
  }
    console.log(`python file output is:${stdout}`);
})


