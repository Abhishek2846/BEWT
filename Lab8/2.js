const express = require ("express");
const app = express();

app.get("/",(req , res)=>{
  res.send("Hello World");
})

app.get("/about",(req , res)=>{
  res.send("Hello About");
})

app.get("/contact",(req , res)=>{
  res.send("Hello Contact");
})

app.get("/login",(req , res)=>{
  res.send("Hello Login");
})

app.use((req , res)=>{
  res.status(404).send("Page not found");
})

app.listen(3001,()=>{
  console.log("server started at @3001");
  
})

