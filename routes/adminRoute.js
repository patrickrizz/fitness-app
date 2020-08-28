const express = require('express')
const router = express.Router()
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

module.exports = router