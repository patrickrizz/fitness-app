const express = require('express')
const passport = require('passport')
const router = express.Router()

const controller = require('../controller/index')

// Google Oauth routes
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }))
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/', failureFlash: true }), controller.auth.googleOauth)

// Login
router.post('/login', passport.authenticate('local', {failureRedirect: '/', failureFlash: true}), controller.auth.localAuth)

// Logout
router.get('/logout', controller.auth.logout)

module.exports = router