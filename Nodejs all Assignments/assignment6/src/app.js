const express = require("express");
const bodyparser = require("body-parser")
const UserDetails = require("../module/userschema");
const app = express();
app.use(bodyparser());

app.get("/", (req, res) => {
    res.send("congratulations!")
})

app.get("/blog", async (req, res) => {
    try {
        const data = await UserDetails.find({
            topic: req.query.search
        }).limit(req.query.page * 5)

        res.status(200).json({
            ststus:"sucess",
            data
        })
    }
    catch (e) {
        res.json({
            message: e.message
        })
    }
})
app.post("/blog", async (req, res) => {
    try {
        const data = await UserDetails.create(req.body)
        res.status(200).json({
            status:"sucess",
            data
        })
    }
    catch (e) {
        res.json({
            message: e.message
        })
    }
})
app.put("/blog/:id", async (req, res) => {
    try {
        const data = await UserDetails.updateMany({_id:req.params.id},req.body)
        res.status(200).json({
            status:"sucess",
            data
        })
    }
    catch (e) {
        res.json({
            message: e.message
        })
    }
})
app.delete("/blog/:id", async (req, res) => {
    try {
        const data = await UserDetails.deleteOne({_id:req.params.id})
        res.status(200).json({
            status:"sucess",
            data
        })
    }
    catch (e) {
        res.json({
            message: e.message
        })
    }
})

app.listen(3000, () => {
    console.log("server is running at 3000")
})