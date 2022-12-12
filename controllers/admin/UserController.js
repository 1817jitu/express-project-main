const e = require("express");
const UserModel = require("../../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class UserController {
  static register = async (req, res) => {
    try {
      res.render("front/register");
    } catch (err) {
      console.log(err);
    }
  };
  static registrationInsert = async (req, res) => {
    const { name, email, password, confirmpassword } = req.body;
    // console.log(req.body)
    const user = await UserModel.findOne({ email: email });
    if (user) {
      req.flash("error", "Email already exist !");
      res.redirect("/admin/register");
    } else {
      if (name && email && password && confirmpassword) {
        if (password == confirmpassword) {
          try {
            // const salt = await bcrypt.genSalt(10)
            // const hashPassword = await bcrypt.hash(password,salt)
            const hashPassword = await bcrypt.hash(password, 10);

            const data = new UserModel({
              name: name,
              email: email,
              password: hashPassword,
            });
            const datasaved = await data.save();
            if (datasaved) {
              req.flash("succMsg", "registration successfully please login !");
              res.redirect("/login");
            } else {
              res.redirect("/admin/register");
            }
          } catch (err) {
            console.log(err);
          }
        } else {
          req.flash("error", "Password and Confirm Password does not match !");
          res.redirect("/admin/register");
        }
      } else {
        req.flash("error", "All Fields are required !");
        res.redirect("/admin/register");
      }
    }
  };

  static loginVerify = async (req, res) => {
    try {
      // console.log(req.body)
      const {email, password} = req.body
      if (email && password) {
        const user = await UserModel.findOne({email : email})
        // console.log(user)
        if (user != null) {
          const isMatched = await bcrypt.compare(password, user.password)
          if ((user.email === email) && isMatched) {
            //generate jwt token
            const token = jwt.sign({userId : user._id}, 'Jitendra@123')

            // console.log(token)
            res.cookie('jwt', token)
            res.redirect('/admin/dashboard')
          } else {
            req.flash('error','Email and Password is not valid !')
            res.render('/login')
          }
        } else {
          req.flash('error','You are not registered user !')
          res.render('/login')
        }
      } else {
        req.flash('error','All fields are required !')
        res.render('/login')
      }
    } catch (err) {
      console.log(err);
    }
  };

  static logout = async (req, res) => {
    try {
      res.clearCookie('jwt')
      res.redirect("/");
    } catch (err) {
      console.log(err);
    }
  };
}

module.exports = UserController;
