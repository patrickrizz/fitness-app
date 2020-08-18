const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
const { Users } = require('../models')

passport.use(new GoogleStrategy({

    //get the following from google apis credentials
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK

}, (accessToken, refreshToken, profile, done) => {
    Users.findOrCreate({
        where: {
            googleid: profile.id,
            email: profile.emails[0].value
        }
    })

    return done(null, profile)
}))

//after strategy is done, you serialize the user
passport.serializeUser((user, done) => {

    done(null, user)
})

//then it deserializes the user
passport.deserializeUser((user, done) => {

    done(null, user)
})