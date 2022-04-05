const express = require('express')
const router =express.Router()
const Moviesam = require('../controllers/moviedetails.js')
//const Movierrr = require('../controllers/moviedetailsget.js')
//createuser   --
        //method-post
router.post("/discover/popular",Moviesam)
//router.get('/mov',Movierrr)

module.exports=router