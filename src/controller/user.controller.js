const User = require("../model/userSchema.model");
const express = require("express");
const Router = express.Router();

const jwt = require("jsonwebtoken");

Router.post("/register", async(req,res)=>{

    try {
        
    


     const {user, email, password, role} = req.body;
     
     const ispresent = await User.findOne({email});

     if(ispresent)
     {
        return res.send("user is already registered")
     }
     const createduser = await User.create({user, email, password,role})

     res.send(createduser);

     return res.status(201).send("user is registerd successfully")
    }
     catch (error) {
     res.send({error:error.message})
     }
})
   //   login  data

Router.post("/login", async(req,res)=>{

    try {
        
    


     const { email, password} = req.body;
     
     const ispresent = await User.findOne({email});






     
     if(!ispresent)
     {
        return res.send("user is not registered")
     }
    

     
const payload = {userId: ispresent._id, role:ispresent.role};
      const token = jwt.sign(payload, "BobiG",
      {expiresIn:"2h"});

res.send({message:"logged in seccessfully",token:token});

    
    }
     catch (error) {
     res.send({error:error.message})
     }
})



module.exports = Router;