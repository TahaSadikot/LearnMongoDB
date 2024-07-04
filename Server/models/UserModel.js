const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, 'Please Add Name'],
        trim: true
    },
    email: {
        type: String,
        require: [true, 'Please Add Email'],
        trim: true,
        unique: true
    },
    password: {
        type: String,
        require: [true, 'Please Add Password'],
        mim: 6,
        max: 64
    },
    role: {
        type: String,
        default: 'User'
    },


},
    {
        timestamps: true
    }
)


module.exports = mongoose.model('User', userSchema)