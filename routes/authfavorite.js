const express = require('express')
const router =express.Router()
const fetchuser = require('../middleware/fetchfavmovie.js')
const Moviefav = require('../controllers/favoritemovie.js')
router.post("/discover/favorite",fetchuser,Moviefav)
module.exports=router 