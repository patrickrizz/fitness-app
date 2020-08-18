const express = require('express')
const passport = require('passport')
const router = express.Router()

//google Oauth routes
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }))
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {

        res.redirect('/dashboard')
    })

//logout
router.get('/logout', (req, res) => {
    req.session.destroy((err) => console.log('Session Destroyed'))
    req.logout()
    res.redirect('/')
})

module.exports = router