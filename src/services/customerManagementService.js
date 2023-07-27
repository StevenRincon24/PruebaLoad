const customerManagementController = require('../controllers/customerManagementController')
const getCustomerData = async (req, res) => {
  try {
    await customerManagementController.getCustomerData()
    .then((customers) =>{
      res.status(200).json({ customers: customers })
    })
  } catch (error) {
    res.status(500).json({ error: "Error getting customer data" })
  }
};

const registerCustomer = async (req, res) =>{
    const { email, customer } = req.body
    try {
      await customerManagementController.registerCustomer(customer.name, customer.lastName, customer.documentType, customer.documentNumber, customer.birthday, customer.cellphone, customer.address, email, customer.password, customer.loans)
      res.status(200).json({ message: "Customer registered successfully" })
    } catch (error) {
      res.status(500).json({ error: "Error registering the customer" })
    } 
}

const updateCustomer = async (req, res) => {
  const { email, customer } = req.body
  try {
    await customerManagementController.updateCustomer(customer.name, customer.lastName, customer.documentType, customer.documentNumber, customer.birthday, customer.cellphone, customer.address, email, customer.loans)
    res.status(200).json({ message: "Customer updated succesfully" })
  } catch (error) {
    res.status(500).json({ error: "Error updating customer" })
  }
}

const deleteCustomer = async (req, res) => { 
  try {
    await customerManagementController.deleteCustomer(req.params.id)
    res.status(200).json({ message: "Customer deleted successfully" })
  } catch (error) {
    res.status(500).json({ error: "Error deleting the customer" })
  }
}

const registerLoan = async (req, res) => {
  const { username, ISBN } = req.body

  try {
    await customerManagementController.registerLoan(username, ISBN)
    res.status(200).json({ message: "Loan register successfully" })
  } catch (error) {
    res.status(500).json({ error: "Error registering loan" })
  }
};

const updateStatus = async (req, res) => {
  try {
    await customerManagementController.updateStatus(req.params.email, req.params.id)
    res.status(200).json({ message: "Loan status updated successfully" })
  } catch (error) {
    res.status(500).json({ error: "Error updating loan status" })
  }
}

const getCustomerDataUnique = async (req, res) =>{
  try {
    await customerManagementController.getCustomerDataUnique(req.params.email)
    .then((user) =>{
      res.status(200).json({ customerData: user })
    })
  } catch (error) {
    res.status(500).json({ error: "Error, customer doesnt exist" })
  }
}

module.exports = {
    getCustomerData,
    registerCustomer,
    deleteCustomer,
    updateCustomer,
    registerLoan,
    updateStatus,
    getCustomerDataUnique 
}