const express = require("express");
const mongoose = require("mongoose");
const ConnectDB = require("./configure/db");
const dotenv = require("dotenv")
dotenv.config()
const path = require('path')
const cors = require('cors')


const app = express();
const PORT = 3000;

// Init middleware
app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());


ConnectDB();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/classrooms', require('./routes/classrooms'));
app.use('/api/tests', require('./routes/tests'));


require('./models/Question')
const questions = mongoose.model('Question')

app.get("/getAll", async(req,res)=>{
    try{

        const allData = await questions.find({})

        res.send({status : "ok", data : allData})
        //console.log(allData)

    }catch(err){
        console.log(err);
    }
})

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
