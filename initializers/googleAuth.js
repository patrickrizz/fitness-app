const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
const { User, Experience, Goal, Strategy, UserStats, Role } = require('../models')

passport.use(new GoogleStrategy({

    //get the following from google apis credentials
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK

}, async (accessToken, refreshToken, profile, done) => {
    await User.findOrCreate({
        where: {
            id: profile.id,
            google_id: profile.id,
            email: profile.emails[0].value,
            name: profile.displayName
        }
    })
    await Experience.findOrCreate({
        where: { user_id: profile.id }
    })
    await Goal.findOrCreate({
        where: { user_id: profile.id }
    })
    await Strategy.findOrCreate({
        where: { user_id: profile.id }
    })
    await UserStats.findOrCreate({
        where: { user_id: profile.id }
    })
    await Role.findOrCreate({
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