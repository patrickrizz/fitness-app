module.exports = {
    createLocalUser: async (req, res) => {
        const bcrypt = require('bcrypt')
        const { v4: uuidv4 } = require('uuid')

        const id = uuidv4()
        const { email, password, password2 } = req.body
        let errors = []

        if (!email || !password || !password2) {
            errors.push({ msg: 'Please enter all fields' })
        }

        if (password != password2) {
            errors.push({ msg: 'Passwords do not match' })
        }

        if (password.length < 8) {
            errors.push({ msg: 'Password must be at least 8 characters' })
        }

        if (errors.length > 0) {
            res.render('sign-up', {
                errors,
                email,
                password,
                password2
            })
        } else {
            const Users = require('../lib/User')
            let user = await new Users(id, email).verifyUser()
            if (user) {
                errors.push({ msg: 'Email already exists' })
                res.render('sign-up', {
                    errors,
                    email,
                    password,
                    password2
                })
            } else {
                const hashedPassword = await bcrypt.hash(password, 10)
                await new Users(id, email).createUser(hashedPassword, null)

                req.flash(
                    'success_msg',
                    'You are now registered'
                )

                const passport = require('passport')
                passport.authenticate('local', { failureRedirect: '/', failureFlash: true })(req, res, () => {
                    res.redirect('/set-up')
                })
            }
        }
    },

    userSetup: async (req) => {
        const Users = require('../lib/User')
        const { id } = req.user
        const setup = true
        const { weight, xp_level: xpLevel, objective, strategy, firstName, lastName } = req.body
        await new Users(id).setupProfile({ setup, firstName, lastName, weight, xpLevel, objective, strategy })
    }
}