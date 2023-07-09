const EmployeeManagementController = require("../controllers/employeeManagementController");
const getEmployeeData = () => {
  const EmployeeData = EmployeeManagementController.getEmployeeData();
  return EmployeeData;
};

const registerEmployee = (req, res) => {
  const {
    name,
    lastName,
    documentType,
    documentNumber,
    birthday,
    cellphone,
    address,
    username,
    password,
  } = req.body;

  EmployeeManagementController.registerEmployee(
    name,
    lastName,
    documentType,
    documentNumber,
    birthday,
    cellphone,
    address,
    username,
    password
  )
    .then((Employee) => {
      res.redirect("/dashBoard/employeeManagement");
    })
    .catch((err) => {
      console.error(err);
      res.redirect("/dashboard/registerEmployee");
    });
};
const deleteEmployee = (req, res) => {
  const username = req.params.username;
  console.log(username);
  EmployeeManagementController.deleteEmployee(username)
    .then(() => {
      res.status(200).json({ message: "Register deleted successfully" });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Error deleting the register" });
    });
};

const updateEmployee = (req, res) => {
  const {
    name,
    lastName,
    documentType,
    documentNumber,
    birthday,
    cellphone,
    address,
    username,
    password,
  } = req.body;

  EmployeeManagementController.updateEmployee(
    name,
    lastName,
    documentType,
    documentNumber,
    birthday,
    cellphone,
    address,
    username,
    password
  )
    .then(() => {
      res.redirect("/dashboard/EmployeeManagement");
    })
    .catch((err) => {
      console.error(err);
      res.redirect("/dashboard/EmployeeManagement");
    });
};

module.exports = {
  getEmployeeData,
  registerEmployee,
  deleteEmployee,
  updateEmployee,
};
