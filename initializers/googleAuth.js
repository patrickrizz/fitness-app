const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
const UserRegisterService = require('../services/UserRegisterService')

passport.use(new GoogleStrategy({

    //get the following from google apis credentials
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK

}, async (accessToken, refreshToken, profile, done) => {
    new UserRegisterService(profile).registerUserGoogle

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