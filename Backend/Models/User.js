const mongoose   =  require('mongoose')


const Person  =new  mongoose.Schema({
 

name : {
    type : String,
    require : true,
    trim : true
},


email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },


  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ["brand", "influencer"],
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }


})


const User =  mongoose.model('User' , Person)

module.exports = User;