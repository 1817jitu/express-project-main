const { Router } = require('express');
const express = require('express');
const AdminController = require('../controllers/admin/adminController');
const BlogController = require('../controllers/admin/BlogController');
const CategoryController = require('../controllers/admin/CategoryController');
const UserController = require('../controllers/admin/UserController');
const EmployeeController = require('../controllers/EmployeeController');
const FrontendController = require('../controllers/FrontendController');
const OrderController = require('../controllers/orderController');
const StudentController = require('../controllers/StudentController');
const router = express.Router()
const Auth = require('../middleware/Auth')


// router.get("/", (req,res)=>{
//     res.send("hello world!");
// });



// =====================================Studentcontroller=======================
router.get('/home',StudentController.display)
router.get('/create',StudentController.create)
router.get('/view',StudentController.view)
router.get('/edit',StudentController.edit)
router.get('/delete',StudentController.delete)

// =====================================EmloyeeController=======================
router.get('/employeeHome',EmployeeController.home)
//router.get('/employeeAbout',EmployeeController.about)
router.get('/employeeContactus',EmployeeController.contactus)
router.get('/empLogin',EmployeeController.login)
router.get('/ourteam',EmployeeController.ourteam)

// ======================================OrderController========================
router.get('/order/display',OrderController.display)

//==================================Frontendcontroller=========================
router.get('/',FrontendController.home)
router.get('/about',FrontendController.about)
router.get('/contact',FrontendController.contact)
router.get('/login',FrontendController.login)
router.get('/blogDetail/:id', FrontendController.blogDetail)

//=================================AdminController=============================
router.get('/admin/dashboard',Auth, AdminController.dashboard)

// ============================== Admin/UserController =============================
router.get('/admin/register',UserController.register)
router.post('/admin/registrationInsert',UserController.registrationInsert)
router.post('/loginVerify',UserController.loginVerify)
router.get('/logout',UserController.logout)

//=================================Admin/BlogController=============================
router.get('/admin/displayBlog',Auth, BlogController.blogDisplay)
router.get('/admin/createBlog',Auth, BlogController.createBlog)
router.post('/admin/blogInsert',Auth,BlogController.blogInsert)
router.get('/admin/viewBlog/:id',Auth,BlogController.viewBlog)
router.get('/admin/editBlog/:id',Auth,BlogController.editBlog)
router.post('/admin/blogUpdate/:id',Auth,BlogController.blogUpdate)
router.get('/admin/deleteBlog/:id',Auth,BlogController.deleteBlog)


// ================================Admin/CategoryController======================
router.get('/admin/categoryDisplay',CategoryController.CategoryDisplay)
router.get('/admin/createCategory',CategoryController.createCategory)
router.post('/admin/categoryStore',CategoryController.createStore)
router.get('/admin/viewCategory/:id',CategoryController.viewCategory)
router.get('/admin/editCategory/:id',CategoryController.editCategory)
router.post('/admin/categoryUpdate/:id', CategoryController.categoryUpdate)
router.get('/admin/deleteCategory/:id',CategoryController.deleteCategory)







module.exports = router