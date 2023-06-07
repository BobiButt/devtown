const User = require("../model/userSchema.model");
const express = require("express");
const Router = express.Router();

Router.post("/register", async(req,res)=>{

    try {
        
    


     const {user, email, password} = req.body;
     
     const ispresent = await User.findOne({email});

     if(ispresent)
     {
        return res.send("user is already registered")
     }
     const createduser = await User.create({user, email, password})


     return res.status(201).send("user is registerd successfully")
    }
     catch (error) {
     res.send({error:error.message})
     }
})



module.exports = Router;