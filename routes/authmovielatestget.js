const express = require('express')
const router =express.Router()
const Movierrr = require('../controllers/movielatestget.js')
router.get('/discover/latest',Movierrr)
module.exports=router