const loginController = require('../controllers/customerManagementController')
const getCustomerData = () =>{
    const customerData = loginController.getCustomerData()
    return customerData
}

module.exports = {
    getCustomerData
}