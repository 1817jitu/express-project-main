// const { createCollection } = require('../../models/Blog')
const { render } = require("ejs");
const CategoryModel = require("../../models/Category");

class CategoryController {
  static CategoryDisplay = async (req, res) => {
    try {
      const data = await CategoryModel.find();
      // console.log(data)
      res.render("admin/category/Display0", { result: data });
    } catch (err) {
      console.log(err);
    }
  };
  static createCategory = async (req, res) => {
    try {
      res.render("admin/category/createCategory");
    } catch (err) {
      console.log(err);
    }
  };
  static createStore = async (req, res) => {
    try {
      // console.log(req.body)
      const result = new CategoryModel({
        title: req.body.title,
        description: req.body.description,
      });
      await result.save();
      res.redirect("/admin/categoryDisplay");
    } catch (err) {
      console.log(err);
    }
  };
  static viewCategory = async (req, res) => {
    try {
      //console.log(req.params.id)
      const data = await CategoryModel.findById(req.params.id);
      //console.log(data)
      res.render("admin/category/view", { b: data });
    } catch (err) {
      console.log(err);
    }
  };
  static editCategory = async (req, res) => {
    try {
      // console.log(data)
      const data = await CategoryModel.findById(req.params.id);
      // console.log(data)
      res.render("admin/category/edit", { d: data });
    } catch (err) {
      console.log(err);
    }
  };
  static categoryUpdate = async (req, res) => {
    try {
      // console.log(req.body)
      // console.log(req.params.id)
      const updatedData = await CategoryModel.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        description: req.body.description,
      });
      await updatedData.save();
      res.redirect("/admin/categoryDisplay");
    } catch (err) {
      console.log(err);
    }
  };
  static deleteCategory = async (req, res) => {
    try {
      //console.log(req.params.id)
       const deleteCategory = await CategoryModel.findByIdAndDelete(req.params.id);
       res.redirect("/admin/categoryDisplay");
    } catch (err) {
      console.log(err);
    }
  };
}
module.exports = CategoryController;
