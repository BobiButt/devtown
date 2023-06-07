const mongoose = require("mongoose");
const bcrypt = require("bcrypt")

const userSchema = mongoose.Schema({
    user:{type:String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true},
role:{type:String, required:true, default:"admin"}
})



userSchema.pre("save", function(next){
    
let hash = bcrypt.hashSync(this.password, 10);
this.password = hash
next()

const compare = hash.checkPassword(req.body.password);
if(compare !== hash){
   res.send("password is incorrect");
}

res.send("logged in successfully")


})


userSchema.methods.checkPassword =function(password){
    return bcrypt.compareSync(password, this.password)
}


const user = mongoose.model("users",userSchema)

module.exports = user;