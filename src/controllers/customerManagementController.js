const data = require('../data/users.json')

const getCustomerData = () =>{
    const customers = Object.keys(data.usuarios)
        .filter((usuario) => data.usuarios[usuario].rol === "customer")
        .map((usuario) => data.usuarios[usuario]);
    return customers
}

module.exports ={
    getCustomerData
}