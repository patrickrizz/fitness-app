const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')
const { User } = require('../database/models')

module.exports = function (passport) {
    passport.use(
        new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
            // Match user
            User.findOne({
                where: {
                    email: email
                }
            }).then(user => {
                if (!user) {
                    return done(null, false, { message: 'That email is not registered' })
                }

                // Match password
                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if (err) throw err
                    if (!isMatch) {
                        return done(null, false, { message: 'Password incorrect' })
                    }
                    return done(null, user)
                })
            })
        })
    )


    passport.serializeUser(function (user, done) {
        done(null, user.id)
    })

    passport.deserializeUser(function (id, done) {
        db.User.findByPk(id)
            .then((user) => {
                done(null, user)
            }).catch(e => {
                done(e, null)
            })
    })

}