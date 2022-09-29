const mongoose = require("mongoose")


const schema = mongoose.Schema;

const playerSchema = new schema({
    player_id:{type:String,required:true},
    password:{type:Number,required:true},
    age:Number,
    country: String,
    installed_days: Number,
    coins: Number,
    gems: Number,
    game_level: Number,
    purchaser: Boolean

})
const Players = mongoose.model("player",playerSchema)

module.exports=Players