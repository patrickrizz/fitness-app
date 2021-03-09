const express = require('express')
const router = express.Router()
const AdminCreateService = require('../services/AdminCreateService')
const adminCreateRouter = require('./adminCreateRoute')
const { ensureAuthenticatedAdmin } = require('../lib/authentication')

// Admin Dashboard
router.get('/', ensureAuthenticatedAdmin, async (req, res) => {

    res.render('admin/dashboard', { title: 'Home' })
})

// Calendar Dashboard
router.get('/cal', ensureAuthenticatedAdmin, async (req, res) => {

    res.render('admin/calendar', { title: 'Calendar' })
})

// Settings Dashboard
router.get('/settings', ensureAuthenticatedAdmin, async (req, res) => {

    res.render('admin/settings', { title: 'Settings' })
})

// Create Content
router.use('/create',  adminCreateRouter)//add admin auth

module.exports = router