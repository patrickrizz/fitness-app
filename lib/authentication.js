const Users = require('../lib/User')

module.exports = {
    ensureAuthenticated: function (req, res, next) {
        if (req.isAuthenticated()) {
            return next()
        }
        req.flash('error_msg', 'Please log in')
        res.redirect('/')
    },
    forwardAuthenticated: function (req, res, next) {
        if (!req.isAuthenticated()) {
            return next()
        }
        res.redirect('/')
    },
    ensureAuthenticatedAdmin: async function (req,res,next) {
        if (req.isAuthenticated()) {
            let id = req.user.id
            let userData = await new Users(id).getUserById
            let userRole = userData.Role.dataValues.role
            if (userRole === 'admin') {
                return next()
            }
        }
        req.flash('error_msg', 'Please log in')
        res.redirect('/')
    }
}