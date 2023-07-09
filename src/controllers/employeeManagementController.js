const data = require("../data/users.json");
const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "../data/users.json");

const getEmployeeData = () => {
  const employees = Object.keys(data.usuarios)
    .filter((usuario) => data.usuarios[usuario].rol === "employee")
    .map((username) => ({
      username,
      ...data.usuarios[username],
    }));
  return employees;
};

const registerEmployee = (
  name,
  lastName,
  documentType,
  documentNumber,
  birthday,
  cellphone,
  address,
  username,
  password
) => {
  const rol = "employee";
  const newUser = username;
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

  const currentDate = new Date();
  const minimumAge = 18; // Edad mínima requerida en años

  const ageDifference = currentDate - new Date(birthday);

  const ageInYears = ageDifference / (1000 * 60 * 60 * 24 * 365.25);

  if (ageInYears < minimumAge) {
    return Promise.reject(new Error("El empleado debe ser mayor de edad."));
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
    });
  });
};

const deleteEmployee = (username) => {
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
      reject(new Error("El empleado no está registrado"));
    }
  });
};

const updateEmployee = (
  name,
  lastName,
  documentType,
  documentNumber,
  birthday,
  cellphone,
  address,
  username,
  password,
  rol = "employee"
) => {
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

module.exports = {
  getEmployeeData,
  registerEmployee,
  deleteEmployee,
  updateEmployee,
};
