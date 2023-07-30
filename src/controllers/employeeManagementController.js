const User = require("../models/User");

const getEmployeeData = async () => {
  try {
    const employees = await User.find({ "employee.rol": "employee" });
    const formattedEmployees = employees.map((user) => {
      const { _id, email, employee } = user;
      return {
        _id,
        username: email,
        ...employee._doc,
      };
    });
    return formattedEmployees;
  } catch (error) {
    return [];
  }
};

const registerEmployee = async (
  name,
  lastName,
  documentType,
  documentNumber,
  birthday,
  cellphone,
  address,
  email,
  password
) => {
  try {
    const currentDate = new Date();
    const birthdayDate = new Date(birthday);
    const ageDifferenceInMs = currentDate - birthdayDate;
    const ageInYears = ageDifferenceInMs / (1000 * 60 * 60 * 24 * 365.25);
    if (ageInYears < 18) {
      throw new Error("The employee must be older than 18");
    }

    await User.create({
      email: email,
      employee: {
        password: password,
        rol: "employee",
        name: name,
        lastName: lastName,
        documentType: documentType,
        documentNumber: documentNumber,
        cellphone: cellphone,
        address: address,
        birthday: birthday,
      },
    });
  } catch (error) {
    throw error;
  }
};

const updateEmployee = async (
  name,
  lastName,
  documentType,
  documentNumber,
  birthday,
  cellphone,
  address,
  email
) => {
  try {
    const user = await User.findOne({
      email: email,
      "employee.rol": "employee",
    });

    if (user) {
      user.employee.name = name;
      user.employee.lastName = lastName;
      user.employee.documentType = documentType;
      user.employee.documentNumber = documentNumber;
      user.employee.birthday = birthday;
      user.employee.cellphone = cellphone;
      user.employee.address = address;
      await user.save();
    } else {
      throw new Error("User doesnt exist");
    }
  } catch (error) {
    throw error;
  }
};

const deleteEmployee = async (id) => {
  try {
    const user = await User.findByIdAndRemove(id);

    if (user) {
      return;
    } else {
      throw new Error("User doesnt exist");
    }
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getEmployeeData,
  registerEmployee,
  deleteEmployee,
  updateEmployee,
};
