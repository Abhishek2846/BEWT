const express = require ("express");
const app = express();
const fs = require ('fs');

app.get("/",(req , res)=>{
  res.send("Hello World");
})

app.get("/about",(req , res)=>{
  fs.readFile("about.txt",(err,data)=>{
        if(err){
          console.log(err)
        }
        res.send(data)
      })
})

app.get("/contact",(req , res)=>{
  fs.readFile("about.txt",(err,data)=>{
        if(err){
          console.log(err)
        }
        res.send(data)
      })
})

app.get("/login",(req , res)=>{
  res.send("Hello Login");
})

app.use((req , res)=>{
  res.status(404).send("Page not found");
})

app.listen(3002,()=>{
  console.log("server started at @3002");
  
})

