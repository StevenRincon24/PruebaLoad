const User = require('../models/User')
const Book = require('../models/Book')

const getCustomerData = async () => {
  try {
    const customers = await User.find({ 'customer.rol': 'customer' });
    const formattedCustomers = customers.map((user) => {
      const { _id, email, customer } = user;
      return {
        _id,
        username: email,
        ...customer._doc,
      };
    });
    return formattedCustomers;
  } catch (error) {
    return [];
  }
}

const registerCustomer = async (
  name,
  lastName,
  documentType,
  documentNumber,
  birthday,
  cellphone,
  address,
  email,
  password,
  loans
) => {
  try {
    await User.create({
      email: email,
      customer: {
        password: password,
        rol: "customer",
        name: name,
        lastName: lastName,
        documentType: documentType,
        documentNumber: documentNumber,
        cellphone: cellphone,
        address: address,
        birthday: birthday,
        loans: loans || [],
      }
    });
  } catch (error) {
    throw error
  }
}

const updateCustomer = async (
  name,
  lastName,
  documentType,
  documentNumber,
  birthday,
  cellphone,
  address,
  email,
  loans
) => {
  try {
    const user = await User.findOne({ email: email, 'customer.rol': 'customer' });

    if (user) {
      user.customer.name = name;
      user.customer.lastName = lastName;
      user.customer.documentType = documentType;
      user.customer.documentNumber = documentNumber;
      user.customer.birthday = birthday;
      user.customer.cellphone = cellphone;
      user.customer.address = address;
      user.customer.loans = loans
      await user.save();
    } else {
      throw new Error("User doesnt exist")
    }
  } catch (error) {
    throw error
  }
}

const deleteCustomer = async (id) => {
  try {
    const user = await User.findByIdAndRemove(id);
    if (user) {
      return 
    } else {
      throw new Error("User doesnt exist");
    }
  } catch (error) { 
    throw error
  }
};

const registerLoan = async (username, ISBN) => {
  try {
    const user = await User.findOne({ email: username, 'customer.rol': 'customer' })
    const book = await Book.findOne({ ISBN })

    if (user && book) {
      const currentDate = new Date()
      const endDate = new Date(currentDate)
      endDate.setDate(currentDate.getDate() + 8)

      const newLoan = {
        id: username + currentDate,
        isbn: ISBN,
        startDate: currentDate,
        endDate: endDate,
        state: true,
      }
      book.copies--
      user.customer.loans.push(newLoan)
      await user.save()
      await book.save()

      return;
    } else {
      throw new Error("User or book doesnt exist");
    }
  } catch (error) {
    throw error
  }
}

const updateStatus = async (email, id) => {
  try {
    const user = await User.findOne({ email: email, 'customer.rol': 'customer' })
    if (user) {
      const loanToUpdate = user.customer.loans.find((loan) => loan.id === id)
      if (loanToUpdate) {
        loanToUpdate.state = false
        await user.save()
        return
      } else {
        throw new Error("Loan doesnt exist")
      }
    } else {
      throw new Error("User doesnt exist")
    }
  } catch (error) {
    throw error
  }
}

const getCustomerDataUnique = async (email) => {
  try {
    const user = await User.findOne({ email: email, 'customer.rol': 'customer' });
    return user
  } catch (error) {
    throw error
  }
};

module.exports = {
  getCustomerData,
  registerCustomer,
  deleteCustomer,
  updateCustomer,
  registerLoan,
  updateStatus,
  getCustomerDataUnique,
};
