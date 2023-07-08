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

module.exports = {
    getCustomerData,
    registerCustomer
}