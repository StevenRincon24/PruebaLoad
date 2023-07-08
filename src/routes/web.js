const express = require("express");
const path = require("path");
const service = require("../services/loginService");
const serviceCustomerManagement = require("../services/customerManagementService");
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
  const username = req.session.username;

  if (rol) {
    res.render("./templates/dashBoard_template", {
      data: rol,
      username: username,
    });
  } else {
    res.redirect("/");
  }
});

router.get("/dashBoard/employeesManagement", (req, res) => {
  req.session = req.session || {};
  const rol = req.session.data;
  const username = req.session.username;

  if (rol) {
    res.render("./admin/employeeManagement", {
      data: rol,
      username: username,
    });
  } else {
    res.redirect("/");
  }
});

router.get("/dashBoard/customersManagement", (req, res) => {
  req.session = req.session || {};
  const rol = req.session.data;
  const username = req.session.username;
  const customersData = serviceCustomerManagement.getCustomerData();
  if (rol) {
    res.render("./employee/customerManagement", {
      data: rol,
      username: username,
      customers: customersData,
    });
  } else {
    res.redirect("/");
  }
});

router.get("/dashBoard/bookManagement", (req, res) => {
  req.session = req.session || {};
  const rol = req.session.data;
  const username = req.session.username;
  if (rol) {
    res.render("./admin/bookManagement", {
      data: rol,
      username: username,
    });
  } else {
    res.redirect("/");
  }
});

router.post("/book/createBook", serviceBook.createBook);

module.exports = router;
