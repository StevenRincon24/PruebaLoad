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

const updateCustomer = (req, res) => {
    const { name, lastName, documentType, documentNumber, birthday, cellphone, address, username, password, rol} = req.body;
  
    customerManagementController
      .updateCustomer(name, lastName, documentType, documentNumber, birthday, cellphone, address, username, password, rol)
      .then(() => {
        res.redirect("/dashboard/customersManagement");
      })
      .catch((err) => {
        console.error(err);
        res.redirect("/dashboard/customersManagement");
      });
  };

const registerLoan = (req, res) =>{
  const { username, ISBN} = req.body
    
  customerManagementController.registerLoan(username, ISBN)
      .then(() => {
          res.redirect("/dashboard/registerLoan");
      })
      .catch((err) => {
          console.error(err);
          res.redirect("/dashboard/registerLoan");
      });
}

module.exports = {
    getCustomerData,
    registerCustomer,
    deleteCustomer,
    updateCustomer,
    registerLoan
}