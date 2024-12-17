const mongoose = require("mongoose");

function connectToDb(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("connected to db")
    })
    .catch((err)=>{
        console.log(err)
    })
}

module.exports = connectToDb;