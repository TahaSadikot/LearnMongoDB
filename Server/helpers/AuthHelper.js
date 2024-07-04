const bccrypt = require('bcrypt')

exports.HashPassword = (password) => {
    return new Promise((resolve, reject) => {
        bccrypt.genSalt(10, (err, salt) => {
            if (err) {
                reject(err)
            }
            bccrypt.hash(password, salt, (err, hash) => {
                if (err) {
                    reject(err)
                }
                resolve(hash)
            })
        })
    })
}

exports.ComparePassword = (password, hash) => {
    return bccrypt.compare(password, hash)
}