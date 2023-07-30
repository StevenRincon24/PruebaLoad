const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

const options = {
    useNewUrlParser:true, useUnifiedTopology:true
}

mongoose.connect(process.env.MONGODB_URI, options).then(()=>{
    console.log("Connected to db")
})
.catch((error) =>{
    console.log(error)
})

module.exports = mongoose