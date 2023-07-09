const data = require('../data/users.json')
const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "../data/users.json");
const filePath2 = path.join(__dirname, "../data/book.json");

const getCustomerData = () => {
  const customers = Object.keys(data.usuarios)
    .filter((usuario) => data.usuarios[usuario].rol === "customer")
    .map((username) => ({
      username,
      ...data.usuarios[username],
    }));
  return customers;
};

const registerCustomer = (name, lastName, documentType, documentNumber, birthday, cellphone, address, username, password) => {
    const rol = "customer"
    const newUser = username
    const newUserData = {
        password,
        rol,
        name,
        lastName,
        documentType,
        documentNumber,
        cellphone,
        address,
        birthday
    }
    return new Promise((resolve, reject) => {
        data.usuarios[newUser] = newUserData;
        const newContent = JSON.stringify(data, null, 2);
        fs.writeFile(filePath, newContent, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(newUserData);
            }
        })
    })
}

const deleteCustomer = (username) => {
  return new Promise((resolve, reject) => {
    if (data.usuarios.hasOwnProperty(username)) {
      delete data.usuarios[username];
      const newContent = JSON.stringify(data, null, 2);
      fs.writeFile(filePath, newContent, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    } else {
      reject(new Error("El usuario no existe"));
    }
  });
};

const updateCustomer = (name, lastName, documentType, documentNumber, birthday, cellphone, address, username, password) =>{
  const newUserData = {
    password,
    rol,
    name,
    lastName,
    documentType,
    documentNumber,
    cellphone,
    address,
    birthday,
  };
  return new Promise((resolve, reject) => {
    data.usuarios[username] = newUserData;
    const newContent = JSON.stringify(data, null, 2);
    fs.writeFile(filePath, newContent, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(newUserData);
      }
    });
  });
};


module.exports ={
    getCustomerData,
    registerCustomer,
    deleteCustomer,
    updateCustomer
}