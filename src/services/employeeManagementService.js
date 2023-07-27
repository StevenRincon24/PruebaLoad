const EmployeeManagementController = require("../controllers/employeeManagementController");
const getEmployeeData = async (req, res) => {
  try {
    await EmployeeManagementController.getEmployeeData().then((employees) => {
      res.status(200).json({ employees: employees });
    });
  } catch (error) {
    res.status(500).json({ error: "Error getting employee data" });
  }
};

const registerEmployee = async (req, res) => {
  const { email, employee } = req.body;
  
  try {
    await EmployeeManagementController.registerEmployee(
      employee.name,
      employee.lastName,
      employee.documentType,
      employee.documentNumber,
      employee.birthday,
      employee.cellphone,
      employee.address,
      email,
      employee.password
    );
    res.status(200).json({ message: "Employee registered successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error registering the employee" });
  }
};

const updateEmployee = async (req, res) => {
  const { email, employee } = req.body;
  try {
    await EmployeeManagementController.updateEmployee(
      employee.name,
      employee.lastName,
      employee.documentType,
      employee.documentNumber,
      employee.birthday,
      employee.cellphone,
      employee.address,
      email,
      employee.password
    );
    res.status(200).json({ message: "Employee updated succesfully" });
  } catch (error) {
    res.status(500).json({ error: "Error updating employee" });
  }
};

const deleteEmployee = async (req, res) => {
  try {
    await EmployeeManagementController.deleteEmployee(req.params.id);
    res.status(200).json({ message: "Employee deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting the employee" });
  }
};

module.exports = {
  getEmployeeData,
  registerEmployee,
  deleteEmployee,
  updateEmployee,
};
