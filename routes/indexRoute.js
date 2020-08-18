const express = require('express')
const router = express.Router()
const { ensureAuthenticated } = require('../lib/authentication')

//landing page
router.get('/', (req, res) => {
    res.render('index')
})

router.get('/dashboard', ensureAuthenticated, (req, res) => {
    res.render('dashboard')
})

module.exports = router