const express = require('express')
const router = express.Router()
const { ensureAuthenticated } = require('../lib/authentication')

const controller = require('../controller/index')

router.get('/', controller.user.displayIndex)
router.get('/sign-up', controller.user.displaySignUp)
router.post('/sign-up', controller.user.createUser)
router.get('/set-up', ensureAuthenticated, controller.user.displayProfileSetup)
router.post('/set-up', ensureAuthenticated, controller.user.profileSetup)

module.exports = router