const express = require("express");
const app = express();
const connect = require("./config/db");
const usercontroller = require("./controller/user.controller");
const moviecontroller = require("./controller/movie.controller");
const bcrypt = require("bcrypt");



app.use(express.json());
require("dotenv");



const port = process.env.PORT || 8080;

app.use("/user", usercontroller);
app.use("/movie", moviecontroller);

app.listen(port, async()=>{

    try {
        await connect();
        console.log(`Bobi Butt listening on port ${port}`)
    } catch (error) {
        console.log({error: error.message});
    }
    
})