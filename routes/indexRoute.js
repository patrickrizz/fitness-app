const express = require('express')
const router = express.Router()
const IndexRouteService = require('../services/IndexRouteService')
const UserSetupService = require('../services/UserSetupService')
const UserRegisterService = require('../services/UserRegisterService')
const { ensureAuthenticated } = require('../lib/authentication')

//landing page
router.get('/', async (req, res) => {
    let id
    (!req.user) ? email = null : id = req.user.id
    let params = await new IndexRouteService(req, id).params()

    const CreateWorkoutForUserService = require('../services/CreateWorkoutForUserService')
    new CreateWorkoutForUserService(id).createWorkout()

    res.render('index', { ...params })
})

router.get('/sign-up', (req, res) => {
    res.render('sign-up')
})

router.post('/sign-up', async (req, res) => {
    await new UserRegisterService(req, res).registerUserLocal()
    await res.redirect('/')
})

router.post('/set-up', ensureAuthenticated, async (req, res) => {
    await new UserSetupService(req).userSetup()
    await res.redirect('/')
})

module.exports = router