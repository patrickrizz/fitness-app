const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
const { User, ExperienceLevel, Objective, Strategy, UserStats, Role } = require('../models')

passport.use(new GoogleStrategy({

    //get the following from google apis credentials
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK

}, (accessToken, refreshToken, profile, done) => {
    User.findOrCreate({
        where: {
            id: profile.id,
            google_id: profile.id,
            email: profile.emails[0].value
        }
    })
    ExperienceLevel.findOrCreate({
        where: { user_id: profile.id }
    })
    Objective.findOrCreate({
        where: { user_id: profile.id }
    })
    Strategy.findOrCreate({
        where: { user_id: profile.id }
    })
    UserStats.findOrCreate({
        where: { user_id: profile.id }
    })
    Role.findOrCreate({
        where: { user_id: profile.id, role: 'member' }
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