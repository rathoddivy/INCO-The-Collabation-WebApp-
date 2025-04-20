const Mongo = require("mongoose");
const dotenv = require('dotenv').config();


const connectDb = async()=>{

try{

await Mongo.connect(process.env.Mongo_URI, {});
console.log("MongoDB connected")

}catch(err){
    console.error("MongoDB connection failed", err.message);


}

};


module.exports = connectDb



