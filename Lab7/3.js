const http = require ("http")
const fs = require ("fs")

const server = http.createServer((req,res)=>{
  if(req.url === "/"){
    res.end("Hello from HomePage");
  }
  else if(req.url === "/about"){
    fs.readFile("about.txt",(err,data)=>{
      if(err){
        console.log(err)
      }
      res.end(data)
    })
  }
  else if(req.url === "/contact"){
    fs.readFile("contact.txt",(err,data)=>{
      if(err){
        console.log(err)
      }
      res.end(data)
    })
  }
  else if(req.url === "/login"){
    res.end("Hello from LoginPage");
  }
})

server.listen(3002,()=>{
  console.log("server started @3002");
  
})