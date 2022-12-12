const mongoose = require('mongoose')

// define Schema
const CategorySchema = new mongoose.Schema({
    title :{
        type : String,
        required : true,
    },
    description :{
        type : String,
        required : true,
    }
})

const CategoryModal = mongoose.model('categories',CategorySchema)

module.exports = CategoryModal