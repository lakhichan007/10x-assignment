const express = require("express")
const app = express()
const bodyparser = require("body-parser")
app.use(bodyparser())

const Players = require("../model/playerSchema")
const Offers = require("../model/offferSchema")
const { default: mongoose } = require("mongoose")
const e = require("express")

mongoose.connect("mongodb://localhost/ShoppingDB")


app.post("/register", async (req, res) => {
    try {
        await Players.create(req.body)
        res.status(200).json({
            status: "sucessfull",
            message: "Registration completeed !"
        })

    }
    catch (e) {
        res.status(400).json({
            status: "fail",
            message: e.message
        })
    }
})

app.post("/login", async (req, res) => {
    try {
        const playerId = req.body.player_id
        const password = req.body.password
        const checkPlayer = await Players.findOne({ player_id: playerId })
        if (checkPlayer.password === password) {
            res.json({
                message:"login sucessfull!"
            })
        }
        else {
            res.send("Invalid playesr or password")
        }
    }
    catch (e) {
        res.json({
            status: "fail",
            message: e.message
        })

    }
})

app.post("/offers",async(req,res)=>{
    try{
        const offerdata= await Offers.create(req.body)
        res.send("Offers created sucessfully!")
    }
    catch(e){
        res.json({
            status:"fail",
            message:e.message
        })

    }
})
app.get("/offers",async(req,res)=>{
    const {page=2,records=10,attributes=offer_title,query="Diwali",}=req.body
    const offerdata = await Offers.findOne({attributes:query}).skip(Number(page)-1)*records.limit(records)

    let targetdta= offerdata.target.split(" ")
    const userage = targetdta[2]
    const install =targetdta[6]

    const offerplayer = await Players.find({ age:{$gt:userage}},{installed_days:{$tg:install}})

})
app.listen(3000, () => {
    console.log("server is running st 3000!")
})