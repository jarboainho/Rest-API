const express = require('express')
const  mongoose = require('mongoose')
require('dotenv').config()
const User = require ('./Model/User')
const app = express()
const mongoUrl = 'mongodb+srv://jarboainho:asta4firoallah@cluster1.txdmm1x.mongodb.net/test'
mongoose.connect( mongoUrl , (err)=>{
  err? console.log(err) : console.log('database is connected')

})
app.use(express.json())
app.use('/users' , require('./Routes/Get') )
app.use('/users' , require('./Routes/Post') )
app.use('/users' , require('./Routes/Delete') )
app.use('/users' , require('./Routes/Update'))
const port =  process.env.PORT
app.listen(port,(err)=>{
    err? console.log(err) : console.log('server is running')
})