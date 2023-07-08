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

router.get("/dashBoard", (req, res) =>{
    req.session = req.session || {}
    const rol = req.session.data
    if (rol) {
        res.render('./templates/dashBoard_template', { data: rol });
    } else {
        res.redirect('/')
    }
})

router.get("/dashBoard/employeesManagement", (req, res) =>{
    req.session = req.session || {}
    const rol = req.session.data
    if (rol) {
        res.render('./admin/employeeManagement', { data: rol });
    } else {
        res.redirect('/')
    }
})


module.exports = router