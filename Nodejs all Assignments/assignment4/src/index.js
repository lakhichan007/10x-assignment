const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here
app.get("/",(req,res)=>{
    res.send("Hello World !")
})

app.post("/add",(req,res)=>{
    let num1=req.body.num1
    let num2=req.body.num2
    let sum=parseInt(num1)+parseInt(num2)

    if(num1==""||num2==""){
        res.json({
            status:"failure",
            message:"Enter the number"
        })
    }
    else if(isNaN(num1)||isNaN(num2)){
        res.json({
            status:"failure",
            message:"Invalid Data types"
        })
    }
    
    else if(parseInt(num1)<-1000000|| parseInt(num2)<-1000000||sum<-1000000){
        res.json({
            status:"error",
            message:"Underflow"
        })
    }
   else if(parseInt(num1)>1000000|| parseInt(num2)>1000000||sum>1000000){
        res.json({
            status:"error",
            message:"Overflow"
        })
    }
    else {
        res.json({
           status:"Sucess",
           message:"the sum of given two numbers" ,
           sum:parseInt(num1)+parseInt(num2)
        })
    }
})

app.post("/sub",(req,res)=>{
    let num1=req.body.num1
    let num2=req.body.num2
    let difference=parseInt(num1)-parseInt(num2)

    if(num1==""||num2==""){
        res.json({
            status:"failure",
            message:"Enter the number"
        })
    }
    else if(isNaN(num1)||isNaN(num2)){
        res.json({
            status:"error",
            message:"Invalid data types"
        })
    }
    
    else if(parseInt(num1)<-1000000|| parseInt(num2)<-1000000||difference<-1000000){
        res.json({
            status:"error",
            message:"Underflow"
        })
    }
    else if(parseInt(num1)>1000000|| parseInt(num2)>1000000||difference>1000000){
        res.json({
            status:"error",
            message:"Overflow"
        })
    }
    else {
        res.json({
           status:"Sucess",
           message:"the difference of given two numbers" ,
           difference:parseInt(num1)-parseInt(num2)
        })
    }

})

app.post("/multiply",(req,res)=>{
    let num1=req.body.num1
    let num2=req.body.num2
    let result=parseInt(num1)*parseInt(num2)

    if(num1==""||num2==""){
        res.json({
            status:"failure",
            message:"Enter the number"
        })
    }
    else if(isNaN(num1)||isNaN(num2)){
        res.json({
            status:"error",
            message:"Invalid data types"
        })
    }

    else if(parseInt(num1)<-1000000|| parseInt(num2)<-1000000||result<-1000000){
        res.json({
            status:"error",
            message:"Underflow"
        })
    }
    else if(parseInt(num1)>1000000|| parseInt(num2)>1000000||result>1000000){
        res.json({
            status:"error",
            message:"Overflow"
        })
    }
    else {
        res.json({
           status:"Sucess",
           message:"The product of given numbers" ,
           result:parseInt(num1)*parseInt(num2)
        })
    }
})

app.post("/divide",(req,res)=>{
    let num1=req.body.num1
    let num2=req.body.num2

    if(num1==""||num2==""){
        res.json({
            status:"failure",
            message:"Enter the number"
        })
    }
    else if(isNaN(num1)||isNaN(num2)){
        res.json({
            status:"error",
            message:"Invalid data types"
        })
    }
    result=parseInt(num1)/parseInt(num2)
    if(parseInt(num1)<-1000000|| parseInt(num2)<-1000000||result<-1000000){
        res.json({
            status:"error",
            message:"Underflow"
        })
    }
    if(parseInt(num1)>1000000|| parseInt(num2)>1000000||result>1000000){
        res.json({
            status:"error",
            message:"Overflow"
        })
    }
    else if(parseInt(num2)==0){
        res.json({
            status:"error",
            message:"Cannot divide by zero"
        })
    }
    else {
        res.json({
           status:"Sucess",
           message:"The division of given numbers" ,
           result:parseInt(num1)/parseInt(num2)
        })
    }
})

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;