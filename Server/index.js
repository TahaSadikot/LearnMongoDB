const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const colors = require('colors')
const bcrypt = require('bcrypt')
const morgan = require('morgan')
const ConnectDB = require('./config/db')

//DOTENV
dotenv.config()


//MONG DB 
ConnectDB()


//REST Object
const app = express()


//Middle Wares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

//ROUTES
app.use('/api/v1/auth', require('./routes/UserRoutes'))

//PORT
const port = process.env.PORT || 8080


//Listen
app.listen(port, () => {
    console.log(`Server Running ${port}`, colors.america)
})