const http= require("http")
const fs = require("fs")

fs.writeFile("index.html","<h1> Hello World </h1><p>This is Lakhichan....</p>",()=>{
    
})
const server =http.createServer((req,res)=>{
    fs.readFile("index.html",(err,data)=>{
        res.write(data)
        res.end()
    })
    
})

server.listen(2222,()=>{
    console.log("server is Runninig!")
})
