const { stdin, stdout } = require("process")
const readline=require("readline")
const rl = readline.createInterface(stdin,stdout)

rl.question("Please enter your name",(ans)=>{
    console.log("Hello "+ ans)
    rl.close()
})