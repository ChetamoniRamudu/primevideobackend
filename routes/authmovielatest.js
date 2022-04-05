const express = require('express')
const router =express.Router()
const Moviesam1 = require('../controllers/movielatest.js')
//const Movierrr = require('../controllers/moviedetailsget.js')
//createuser   --
        //method-post
router.post("/discover/latest",Moviesam1)
//router.get('/mov',Movierrr)

module.exports=router