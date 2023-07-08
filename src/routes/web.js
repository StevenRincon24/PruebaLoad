const express = require("express");
const path = require("path");
const service = require("../services/loginService");
const serviceBook = require("../services/createBookService");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("login");
});

router.get("/admin", (req, res) => {
  res.render("templates/dashBoard_template");
});

router.post("/login/validateUser", service.validateLogin);

router.get("/dashBoard", (req, res) => {
  req.session = req.session || {};
  const rol = req.session.data;
  if (rol) {
    res.render("./templates/dashBoard_template", { data: rol });
  } else {
    res.redirect("/");
  }
});

router.get("/dashBoard/employeesManagement", (req, res) => {
  req.session = req.session || {};
  const rol = req.session.data;
  if (rol) {
    res.render("./admin/employeeManagement", { data: rol });
  } else {
    res.redirect("/");
  }
});

router.get("/dashBoard/bookManagement", (req, res) => {
  req.session = req.session || {};
  const rol = req.session.data;
  if (rol) {
    res.render("./admin/bookManagement", { data: rol });
  } else {
    res.redirect("/");
  }
});

router.post("/book/createBook", serviceBook.createBook);

module.exports = router;
