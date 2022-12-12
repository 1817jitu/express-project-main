const BlogModel = require("../../models/Blog");
const ContactModel = require("../../models/contact");
var cloudinary = require('cloudinary').v2;

cloudinary.config({ 
  cloud_name: 'dfk0h5dz9', 
  api_key: '422199898989339', 
  api_secret: 'biIAjbIjiR7MsDer5UpwMFiT5XU',
  //secure: true
});

class BlogController {
  static blogDisplay = async (req, res) => {
    try {
      const data = await BlogModel.find();
      //   console.log(data)
      res.render("admin/blog/display", { result: data });
    } catch (err) {
      console.log(err);
    }
  };
  static createBlog = async (req, res) => {
    try {
      res.render("admin/blog/createBlog");
    } catch (err) {
      console.log(err);
    }
  };
  static blogInsert = async (req, res) => {
    try {
      // console.log(req.files.image)
      const file = req.files.image
      const myCloud = await cloudinary.uploader.upload(file.tempFilePath,{
        folder : 'blogImage'
      })
      // console.log(myCloud)
      const result = new BlogModel({
        title: req.body.title,
        description: req.body.description,
        image: {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        },
      });
      await result.save();
      res.redirect("/admin/displayBlog");
    } catch (err) {
      console.log(err);
    }
  };
  static viewBlog = async (req, res) => {
    try {
      //console.log(req.params.id)
      const data = await BlogModel.findById(req.params.id);
      //console.log(data)
      res.render("admin/blog/view", { d: data });
    } catch (err) {
      console.log(err);
    }
  };
  static editBlog = async (req, res) => {
    try {
      //console.log(req.params.id)
      const data = await BlogModel.findById(req.params.id);
      //console.log(data)
      res.render("admin/blog/edit", { d: data });
    } catch (err) {
      console.log(err);
    }
  };
  static blogUpdate = async (req, res) => {
    try {
      const user = await BlogModel.findById(req.params.id)
      const imageId = user.image.public_id
      // console.log(imageId)
      await cloudinary.uploader.destroy(imageId)
      const file = req.files.image
      const myCloud = await cloudinary.uploader.upload(file.tempFilePath,{
        folder : 'blogImage'
      })
      // console.log(req.body)
      //console.log(req.params.id)
      const updatedData = await BlogModel.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        description: req.body.description,
        image: {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        },
      });
      await updatedData.save();
      res.redirect("/admin/displayBlog");
    } catch (err) {
      console.log(err);
    }
  };
  static deleteBlog = async (req, res) => {
    try {
      const user = await BlogModel.findById(req.params.id)
      const imageId = user.image.public_id
      // console.log(imageId)
      await cloudinary.uploader.destroy(imageId)
      //console.log(req.params.id)
      const deleteBlog = await BlogModel.findByIdAndDelete(req.params.id);
      res.redirect("/admin/displayBlog");
    } catch (err) {
      console.log(err);
    }
  };
}
module.exports = BlogController;
