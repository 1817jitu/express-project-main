class AdminController {
  static dashboard = async(req,res) => {
    try{
        const {name, email } = req.data
        res.render('admin/dashboard', {userName: name, userEmail: email })
    }catch(err){
        console.log(err)
    }
}
}
module.exports = AdminController;
