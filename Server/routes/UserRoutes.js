
const express = require('express')
const { registerController, LoginController } = require('../controller/UserController')

const router = express.Router()


router.post('/register', registerController)

router.post('/login', LoginController)
router.post('/demo', (req, res) => {
    return res.status(201).send({
        message: "Demo Success"
    })
})


module.exports = router