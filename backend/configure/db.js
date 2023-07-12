const mongoose = require('mongoose')
const dotenv = require('dotenv').config()


const db = `${process.env.MONGO_URI}`

const ConnectDB = async () => {
    try {
        await mongoose.connect(db, {

            useNewUrlParser: true,
            //useCreateIndex: true,
            //useFindAndModify: false,
            useUnifiedTopology: true,

        });
        console.log("mongoDB connected...");
    } catch (err) {
        console.error(err.message);
        // Exit process with failure
        process.exit(1);
    }
};

module.exports = ConnectDB;


