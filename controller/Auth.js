const passport = require('passport')

module.exports = {
    googleOauth: async (req, res) => {
        let id = req.user.id
        const setup = await _setupVerification(id, res)
        if (!setup) { res.redirect('/set-up') } else { res.redirect('/') }
    },
    localAuth: async (req, res, next) => {
        let id = req.user.id
        const setup = await _setupVerification(id, res)
        if (!setup) { res.redirect('/set-up') } else { res.redirect('/') }
    },
    logout: (req, res) => {
        req.session.destroy((err) => console.log('Session Destroyed'))
        req.logout()
        res.redirect('/')
    }
}

const _setupVerification = async (id, res) => {
    const Users = require("../lib/User")
    const { setup } = await new Users(id).userData
    if (setup) return true
}