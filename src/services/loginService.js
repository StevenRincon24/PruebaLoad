const loginController = require('../controllers/loginController')


const validateLogin = (req, res) =>{
    req.session = req.session || {}

    const {username, password} = req.body
    try {
        const rol = loginController.validateLogin(username, password)
        if (rol) {
          if (rol === 'admin' || rol === 'employee' || rol === 'customer') {
            req.session.data = rol
            req.session.username = username
            res.redirect('/dashboard')
          } else {
            res.redirect('/')
          }
        } else {
          res.redirect('/')
        }
      } catch (error) {
        console.log('Error:', error);
        res.redirect('/')
      }
}
    

module.exports = {
    validateLogin
}