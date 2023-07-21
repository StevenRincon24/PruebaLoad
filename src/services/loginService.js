const loginController = require('../controllers/loginController');

const validateLogin = async (req, res) => {
  const { username, password } = req.body;
  try {
    const rol = await loginController.validateLogin(username, password);
    if (rol) {
      if (rol === 'admin' || rol === 'employee' || rol === 'customer') {
        res.status(200).json({ message: "User finded ", rol: rol})
      } else {
        res.status(500).json({ error: "Error, user is not registered" })
      }
    } else {
      res.status(500).json({ error: "Error, user is not registered" })
    }
  } catch (error) {
    res.status(500).json({ error: "Error, user is not registered" })
  }
};

module.exports = {
  validateLogin
};