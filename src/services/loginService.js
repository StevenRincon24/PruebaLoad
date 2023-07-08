const loginController = require('../controllers/loginController')
const validateLogin = (req, res) =>{
    const {username, password} = req.body
    const rol = loginController.validateLogin(username, password)
    rol != null && rol === 'admin' ? res.render('./templates/dashBoard_template'): rol === 'employee' ?  res.render('./templates/dashBoard_template'): rol === 'customer' ? res.render('./templates/dashBoard_template') : res.render('/')
}

module.exports = {
    validateLogin
}