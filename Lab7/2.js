const http = require ("http")

const server = http.createServer((req,res)=>{
  if(req.url === "/"){
    res.end("Hello from HomePage");
  }
  else if(req.url === "/about"){
    res.end("Hello from AboutPage");
  }
  else if(req.url === "/contact"){
    res.end("Hello from ContactPage");
  }
  else if(req.url === "/login"){
    res.end("Hello from LoginPage");
  }
})

server.listen(3001,()=>{
  console.log("server started @3001");
  
})