const mongoose = require('mongoose')

const {Schema} = mongoose

// Esquema para los préstamos
const loanSchema = new Schema({
  id: String,
  isbn: String,
  startDate: Date,
  endDate: Date,
  state: Boolean
});

// Esquema para el rol "admin"
const adminSchema = new Schema({
  password: String,
  rol: {
    type: String,
    enum: ['admin']
  },
  name: String,
  lastName: String,
  documentType: String,
  documentNumber: String,
  cellphone: String,
  address: String,
  birthday: Date
});

// Esquema para el rol "employee"
const employeeSchema = new Schema({
  password: String,
  rol: {
    type: String,
    enum: ['employee']
  },
  name: String,
  lastName: String,
  documentType: String,
  documentNumber: String,
  cellphone: String,
  address: String,
  birthday: Date
});

// Esquema para el rol "customer"
const customerSchema = new Schema({
  password: String,
  rol: {
    type: String,
    enum: ['customer']
  },
  name: String,
  lastName: String,
  documentType: String,
  documentNumber: String,
  cellphone: String,
  address: String,
  birthday: Date,
  loans: [loanSchema]
});

const UserSchema = new Schema({
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
