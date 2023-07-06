const express = require('express')

const app = express()

app.use(express.static('public'))   
app.use(express.urlencoded({extended:false}))
app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'ejs')

app.set('PORT', process.env.PORT || 4000)
app.listen(app.get('PORT'), () =>{
    console.log(`Server deployed on port ${app.get('PORT')}`)
})

app.use('/', require('./routes/web'))