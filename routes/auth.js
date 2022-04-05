const express = require('express')
const router =express.Router()
const { createUser, checkLogin } = require('../controllers/usercontrollers.js')


//createuser   --
        //method-post
router.post("/signup",createUser)

//login user
router.post("/signin",checkLogin)

module.exports=router
