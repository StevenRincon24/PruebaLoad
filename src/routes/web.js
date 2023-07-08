const express = require('express')
const path = require('path')
const service = require('../services/loginService')

const router = express.Router()

router.get("/", (req, res) =>{
    res.render('login')
})

router.get("/admin", (req, res) =>{
    res.render('templates/dashBoard_template')
})

router.post("/login/validateUser", service.validateLogin)


module.exports = router