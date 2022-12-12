const mongoose = require('mongoose')

// define Schema
const UserSchema = new mongoose.Schema({
    name :{
        type:String,
        required : true,
    },
    email : {
        type : String,
        require : true
    },
    password : {
        type : String,
        require : true
    },
},{timestamps : true })

const UserModel = mongoose.model('Users',UserSchema)

module.exports = UserModel