const jwt = require("jsonwebtoken")


const isAdminAuthorzed = (req,res, next)=>{
    const token = req.headers.authorization.split("").splice(7).join("");
 
    

if(!token){
    return res.send("no tokken found")
}
console.log(token);
// const data = verifyToken(token)
// console.log(data, "data"); 


    jwt.verify(token, "BobiG", (err,decoded)=>{
    if(err){
        console.log(err);
        return null
    }
    
    console.log(decoded);
    if (decoded.role == "admin") {
        next()
    }
    if (decoded.role !== "admin") {
        return res.send("you are not authorized to perform action")
    }


    }
    )}








module.exports = isAdminAuthorzed