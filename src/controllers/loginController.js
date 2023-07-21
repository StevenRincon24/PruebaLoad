const User = require('../models/User');

const validateLogin = async (username, password) => {
  try {
    const user = await User.findOne({ email: username });
    if (user) {
        if(user.admin){
            if (user.admin.password === password) {
                return user.admin.rol;
            } else {
                return null;
            }
        }
        if(user.employee){
            if (user.employee.password === password) {
                return user.employee.rol;
            } else {
                return null;
            }
        }
        if(user.customer){
            if (user.customer.password === password) {
                return user.customer.rol;
            } else {
                return null;
            }
        }
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};

module.exports = {
  validateLogin
};



