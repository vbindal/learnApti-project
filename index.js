const express = require("express");
const mongoose = require("mongoose");
const ConnectDB = require("./configure/db");
const dotenv = require("dotenv")

dotenv.config()

const app = express();
const PORT = 3000;

ConnectDB();
app.get("/", (req, res) => {
  res.send("Hello");
});

require('./models/Question')
const questions = mongoose.model('Question')

app.get("/getAll", async(req,res)=>{
    try{

        const allData = await questions.find({})

        res.send({status : "ok", data : allData})

    }catch(err){
        console.log(err);
    }
})

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
