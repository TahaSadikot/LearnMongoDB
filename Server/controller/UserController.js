const { HashPassword, ComparePassword } = require('../helpers/AuthHelper')
const UserModel = require('../models/UserModel')
const userModel = require('../models/UserModel')
const JWT = require('jsonwebtoken')



const registerController = async (req, res) => {
    try {
        const { name, email, password } = JSON.parse(req.body)

        if (!name) {
            return res.status(400).send({
                success: false,
                message: 'Name Is Require'
            })
        }
        if (!email) {
            return res.status(400).send({
                success: false,
                message: 'Email Is Require'
            })
        }
        if (!password || password.length < 6) {
            return res.status(400).send({
                success: false,
                message: 'Password Is Require and Minimum 6 Character Long'
            })
        }


        const existingUser = await userModel.findOne({ email: email })


        if (existingUser) {
            return res.status(500).send({
                success: false,
                message: "User Already Register With This Email"
            })
        }

        const hashPassword = await HashPassword(password)

        const user = await userModel({
            name: name,
            email: email,
            password: hashPassword
        }).save()

        return res.status(201).send({
            success: true,
            message: 'Registration Successfull Please Login'
        })



    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: 'Error In Register API',
            error: error
        })
    }
}




const LoginController = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(500).send({
                success: false,
                message: 'Email Id and Password Required !!'
            })
        }

        const user = await UserModel.findOne({ email: email })
        if (!user) {
            return res.status(500).send({
                success: false,
                message: "User Not Found"
            })
        }
        const comparePassword = await ComparePassword(password, user.password)

        if (!comparePassword) {
            return res.status(500).send({
                success: false,
                message: "Invalid Email Id or Password"
            })
        }

        const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' })
        user.password = undefined
        return res.status(200).send({
            success: true,
            message: "Login Successfull",
            token: token,
            user: user
        })

    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Error In Login',
            error: error
        })
    }
    const user = UserModel

}




module.exports = { registerController, LoginController }