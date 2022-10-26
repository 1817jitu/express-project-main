class FrontendController{
    static home = async(req,res) =>{
        try{
            res.render('front/home')
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
}

module.exports = FrontendController