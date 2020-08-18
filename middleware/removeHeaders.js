const express = require('express')
const app = express()

//remove headers for security
const removeHeaders = () => {
    app.use((req, res, next) => {
        res.removeHeader('X-Powered-By')
        res.removeHeader('Server')
        next()
    })
}

module.exports = removeHeaders