const mongoose = require('mongoose')

// define Schema
const ContactSchema = new mongoose.Schema({
    name :{
        type:String,
        required :true,
    },
    email : {
        type : String,
        require : true
    },
    password : {
        type:String,
        required :true,
    },
    massage : {
        type : String,
        require : true
    }
})

const ContactModal = mongoose.model('Contacts',ContactSchema)

module.exports = ContactModal