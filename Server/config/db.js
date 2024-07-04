const mongoose = require('mongoose')
const colors = require('colors')


const ConnectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connected to Database ${mongoose.connection.host}`.bgCyan.white)
    } catch (error) {
        console.log('Error in Connection DB' + error.bgRed.white)
    }
}

module.exports = ConnectDB