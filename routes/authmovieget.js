const express = require('express')
const router =express.Router()
const Movierrr = require('../controllers/moviedetailsget.js')
router.get('/discover/popular',Movierrr)
module.exports=router