const { Router } = require('express');
const express = require('express');
const EmployeeController = require('../controllers/EmployeeController');
const FrontendController = require('../controllers/FrontendController');
const OrderController = require('../controllers/orderController');
const StudentController = require('../controllers/StudentController');
const router = express.Router()



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
router.get('/home',EmployeeController.home)
router.get('/about0',EmployeeController.about0)
router.get('/contactus',EmployeeController.contactus)
router.get('/login',EmployeeController.login)
router.get('/ourteam',EmployeeController.ourteam)

// ======================================OrderController========================
router.get('/order/display',OrderController.display)

//==================================Frontendcontroller=========================
router.get('/',FrontendController.home)
router.get('/about',FrontendController.about)
router.get('/contact',FrontendController.contact)

module.exports = router