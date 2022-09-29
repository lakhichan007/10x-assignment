const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/Database15",{})
.then(()=>{
    console.log("Sucessfully connected with Dtabse !")
})
.catch(e=>{
    console.log("error")
})
const schema = mongoose.Schema;

const userSchema = new schema({
    topic:{type:String},
    description:{ type:String},
    posted_at:{type:Date},
    posted_by:{type:String}

})
const UserDetails= mongoose.model("collection15" ,userSchema)
module.exports=UserDetails;