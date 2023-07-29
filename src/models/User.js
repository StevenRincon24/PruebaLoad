const mongoose = require('mongoose')

// Esquema para los préstamos
const loanSchema = new mongoose.Schema({
  id: String,
  isbn: String,
  startDate: Date,
  endDate: Date,
  state: Boolean
});

// Esquema para el rol "admin"
const adminSchema = new mongoose.Schema({
  password: String,
  rol: String,
  name: String,
  lastName: String,
  documentType: String,
  documentNumber: String,
  cellphone: String,
  address: String,
  birthday: Date
}, { _id: false });

// Esquema para el rol "employee"
const employeeSchema = new mongoose.Schema({
  password: String,
  rol: String,
  name: String,
  lastName: String,
  documentType: String,
  documentNumber: String,
  cellphone: String,
  address: String,
  birthday: Date
}, { _id: false });

// Esquema para el rol "customer"
const customerSchema = new mongoose.Schema({
  password: String,
  rol: String,
  name: String,
  lastName: String,
  documentType: String,
  documentNumber: String,
  cellphone: String,
  address: String,
  birthday: Date,
  loans: [loanSchema]
}, { _id: false });

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  admin: adminSchema,
  employee: employeeSchema,
  customer: customerSchema
});

const User = mongoose.model('users', UserSchema)

module.exports = User;
