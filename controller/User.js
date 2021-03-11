module.exports = {

    displayIndex: async (req, res) => {
        const IndexRoute = require('../services/IndexRoute')
        let id
        (!req.user) ? null : { id } = req.user
        let params = await new IndexRoute(req, id).params()
        res.render('index', { ...params })
    },

    displaySignUp: (req, res) => { res.render('sign-up') },

    displayProfileSetup: async (req, res) => {
        const IndexRoute = require('../services/IndexRoute')
        const { id } = req.user
        let params = await new IndexRoute(req, id).params()
        res.render('set-up', { ...params })
    },

    createUser: async (req, res) => {
        const users = require('../services/User')
        await users.createLocalUser(req, res)
        res.redirect('/set-up')
    },

    profileSetup: async (req, res) => {
        const users = require('../services/User')
        await users.userSetup(req)

        const CreateWorkoutForUserService = require('../services/CreateWorkoutForUserService')
        // new CreateWorkoutForUserService(id).createWorkout()

        await res.redirect('/')
    }

}