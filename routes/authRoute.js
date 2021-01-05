const express = require('express')
const passport = require('passport')
const router = express.Router()

// Google Oauth routes
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }))
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        if (req.user.id === '106355498027631381428' || '105097979934155160948') {
            res.redirect('/admin')
        } else {
            res.redirect('/')
        }
    })

// Login
router.post('/login', async (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/admin',
        failureRedirect: '/',
        failureFlash: true
    })(req, res, next)
})

// Logout
router.get('/logout', (req, res) => {
    req.session.destroy((err) => console.log('Session Destroyed'))
    req.logout()
    res.redirect('/')
})

module.exports = router