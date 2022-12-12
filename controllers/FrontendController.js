const BlogModel = require('../models/Blog')

class FrontendController{
    static home = async(req,res) =>{
        try{
            const blog = await BlogModel.find()
            //console.log(blog)
            res.render('front/home',{b : blog})
        }catch(err){
            console.log(err)
        }
    }
    static about = async(req,res) =>{
        try{
            res.render('front/about')
        }catch(err){
            console.log(err)
        }
    }
    static contact = async(req,res) =>{
        try{
            res.render('front/contact')
        }catch(err){
            console.log(err)
        }
    }
    static login = async(req,res) =>{
        try{
            res.render('front/login',{succMsg : req.flash('succMsg'), errMsg : req.flash('error')})
        }catch(err){
            console.log(err)
        }
    }
    static blogDetail = async(req,res) =>{
        try{
            // console.log(req.params.id)
            const blogDetail = await BlogModel.findById(req.params.id)
            const allBlogs = await BlogModel.find()
            res.render('front/blogDetail',{d:blogDetail, b:allBlogs})
        }catch(err){
            console.log(err)
        }
    }
}

module.exports = FrontendController