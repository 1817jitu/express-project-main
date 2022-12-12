const mongoose = require('mongoose')

// define Schema
const BlogSchema = new mongoose.Schema({
    title :{
        type:String,
        required : true,
    },
    description : {
        type : String,
        require : true
    },
    image:{
        public_id:{
            type:String,
            required:true,
        },
        url:{
            type:String,
            required:true,
        },
    },
},{timestamps : true })

const blogModel = mongoose.model('blogs',BlogSchema)

module.exports = blogModel