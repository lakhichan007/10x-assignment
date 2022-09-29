const mongoose = require("mongoose")


const schema= mongoose.Schema;
 const offersschema= new schema({
    
offer_id:{type: String,required:true}, 
offer_title:{type: String,required:true}, 
offer_description: String, 
offer_image: String, 
content: Array, 
schedule: Object, 
target: String, 
pricing: Array

 })
const Offers = mongoose.model("offer",offersschema)

module.exports = Offers