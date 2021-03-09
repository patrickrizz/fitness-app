module.exports = {

    displayIndex: async (req, res) => {
        const IndexRouteService = require('../services/IndexRouteService')
        let id
        (!req.user) ? email = null : id = req.user.id
        let params = await new IndexRouteService(req, id).params()
        res.render('index', { ...params })
    },

    displaySignUp: (req, res) => { res.render('sign-up') },

    createUser: async (req, res) => {
        const UserRegisterService = require('../services/UserRegisterService')
        await new UserRegisterService(req, res).registerUserLocal()
        await res.redirect('/set-up')
    },

    dispplayProfileSetup: async (req, res) => {
        const IndexRouteService = require('../services/IndexRouteService')
        let id
        (!req.user) ? email = null : id = req.user.id
        let params = await new IndexRouteService(req, id).params()
        res.render('set-up', { ...params })
    },

    profileSetup: async (req, res) => {
        const UserSetupService = require('../services/UserSetupService')
        await new UserSetupService(req).userSetup()

        const CreateWorkoutForUserService = require('../services/CreateWorkoutForUserService')
        // new CreateWorkoutForUserService(id).createWorkout()

        await res.redirect('/')
    }
}