const express = require('express')
const path = require('path')

const router = express.Router()

router.get("/", (req, res) =>{
    res.render('login')
})

router.get("/admin", (req, res) =>{
    res.render('templates/dashBoard_template')
})

module.exports = router