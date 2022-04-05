const express = require('express')
const router =express.Router()
const fetchuser = require('../middleware/fetchfavmovie.js')
const Moviefavi = require('../controllers/favoritemovieget.js')
router.get("/discover/favorite",fetchuser,Moviefavi)
module.exports=router 