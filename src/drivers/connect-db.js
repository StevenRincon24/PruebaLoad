const mongoose = require('mongoose')
const User = require('../models/User')

const mongoDBURL = 'mongodb+srv://hovarrincon:eudDkqIFJVwfhofJ@cluster0.ohmrvcr.mongodb.net/?retryWrites=true&w=majority';

mongoose.set('strictQuery', false)

const options = {
    useNewUrlParser:true, useUnifiedTopology:true
}

mongoose.connect(process.env.MONGODB_URI || mongoDBURL, options).then(()=>{
    console.log("Connected to db")
})
.catch((error) =>{
    console.log(error)
})

module.exports = mongoose