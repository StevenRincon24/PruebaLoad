const data = require('../data/users.json')

const validateLogin = (username, password) =>{
    const findUser = data.usuarios[username]
    if (findUser != null){
        if(findUser.password === password){
            return findUser.rol
        }else{
            return null
        }
    }else{
        return null
    }
}

module.exports = {
    validateLogin
}



