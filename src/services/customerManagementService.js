const customerManagementController = require('../controllers/customerManagementController')
const getCustomerData = () =>{
    const customerData = customerManagementController.getCustomerData()
    return customerData
}

const registerCustomer = (req, res) =>{
    const { name, lastName, documentType, documentNumber, birthday, cellphone, address, username, password} = req.body
    
    customerManagementController.registerCustomer(name, lastName, documentType, documentNumber, birthday, cellphone, address, username, password)
        .then((customer) => {
            res.redirect("/dashBoard/customersManagement");
        })
        .catch((err) => {
            console.error(err);
            res.redirect("/dashboard/registerCustomer");
        });
}
const deleteCustomer = (req, res) => {
    const username = req.params.username
    
    customerManagementController
    .deleteCustomer(username)
    .then(() => {
      res.status(200).json({ message: "Register deleted successfully" })
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Error deleting the register" })
    })
}

module.exports = {
    getCustomerData,
    registerCustomer,
    deleteCustomer
}