const http=require("http");
const fs=require("fs")
const data= fs.readFileSync("user.json");
// const objDta=JSON.parse(data);

const server=http.createServer((req,res)=>{
  if(req.url=="/welcome"){
    res.writeHead(200,{"content-type":"text/plane"})
    res.end("Welcome to Dominos!")
  }

  else if(req.url=="/contact"){
    res.writeHead(200,{"content-type":"application/json"})
    res.end(data)
  }
  else{
    res.writeHead(404,{"content-type":"application/json"})
    res.end("Page not found!")
  }
})


server.listen(8081,()=>{
    console.log("your server is running at 8081");
})