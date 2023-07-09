const data = require('../data/users.json')
const dataBook = require("../data/book.json");
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
    const loans = []
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
        loans
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
        const newContent = JSON.stringify(data, null, 2)
        fs.writeFile(filePath, newContent, (err) => {
          if (err) {
            reject(err)
          } else {
            resolve()
          }
        })
      } else {
        reject(new Error('El usuario no existe'));
      }
    })
}


const updateCustomer = (name, lastName, documentType, documentNumber, birthday, cellphone, address, username, password, rol) =>{
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
    data.usuarios[newUser] = newUserData;
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



const registerLoan = (username, ISBN) => {
  return new Promise((resolve, reject) => {
    const currentDate = new Date();
    const endDate = new Date(currentDate);
    endDate.setDate(currentDate.getDate() + 8);
    const startDateString = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;
    const endDateString = `${endDate.getFullYear()}-${(endDate.getMonth() + 1).toString().padStart(2, '0')}-${endDate.getDate().toString().padStart(2, '0')}`;

    if (dataBook[ISBN].copies > 0) {
      dataBook[ISBN].copies--;

      data.usuarios[username].loans.push({
        isbn: ISBN,
        startDate: startDateString,
        endDate: endDateString,
        state: true
      });

      const newContentUsers = JSON.stringify(data, null, 2);
      const newContentBooks = JSON.stringify(dataBook, null, 2);

      fs.writeFile(filePath, newContentUsers, (err) => {
        if (err) {
          reject(err);
        } else {
          fs.writeFile(filePath2, newContentBooks, (err) => {
            if (err) {
              reject(err);
            } else {
              resolve();
            }
          });
        }
      });
    } else {
      reject("No hay copias disponibles de este libro");
    }
  });
}

module.exports ={
    getCustomerData,
    registerCustomer,
    deleteCustomer,
    updateCustomer,
    registerLoan
}
