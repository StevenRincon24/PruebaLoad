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

router.get("/dashBoard/employeeManagement", (req, res) => {
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
  const rol = req.session.data;
  const username = req.session.username;
  const bookData = serviceBook.getBookData();
  if (rol) {
    res.render("./admin/bookManagement", {
      data: rol,
      username: username,
      books: bookData,
    });
  } else {
    res.redirect("/");
  }
});

router.get("/dashboard/registerCustomer", (req, res) => {
  const rol = req.session.data;
  const username = req.session.username;
  if (rol) {
    res.render("./employee/registerCustomerManagement", {
      data: rol,
      username: username,
    });
  } else {
    res.redirect("/");
  }
});

router.post("/dashboard/registerCustomer/register", serviceCustomerManagement.registerCustomer)
router.delete("/dashboard/customersManagement/delete/:username", serviceCustomerManagement.deleteCustomer)
router.post("/dashboard/customersManagement/edit", serviceCustomerManagement.updateCustomer)

router.get("/dashBoard/createBookManagement", (req, res) => {
  req.session = req.session || {};
  const rol = req.session.data;
  const username = req.session.username;
  if (rol) {
    res.render("./admin/createBookManagement", {
      data: rol,
      username: username,
    });
  } else {
    res.redirect("/");
  }
});

router.get("/dashBoard/createEmployee", (req, res) => {
  req.session = req.session || {};
  const rol = req.session.data;
  const username = req.session.username;
  if (rol) {
    res.render("./admin/createEmployeeManagement", {
      data: rol,
      username: username,
    });
  } else {
    res.redirect("/");
  }
});

router.post("/book/createBook", serviceBook.createBook);

router.get("/dashboard/registerLoan", (req, res) => {
  const rol = req.session.data
  const username = req.session.username
  const bookData = serviceBook.getBookData()
  const customersData = serviceCustomerManagement.getCustomerData()
  if (rol) {
    res.render("./employee/registerLoanCustomerManagement", {
      data: rol,
      username: username,
      bookData: bookData,
      customers: customersData
    });
  } else {
    res.redirect("/");
  }
});

router.post("/dashboard/registerLoan/register", serviceCustomerManagement.registerLoan)


module.exports = router;
