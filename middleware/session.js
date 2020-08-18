const session = require('express-session')
const express = require('express')
const app = express()

//setup a session based on server environment
const theSession = () => {
    if (app.get('env') === 'production') {
        app.use(session({
            secret: [process.env.SESSION_SECRET, process.env.SESSION_SECRET_2],
            name: 'awesomeSession',
            resave: true,
            saveUninitialized: true,
            cookie: {
                maxAge: 60000
            } //only used with https, can't with http. It secures the cookie, sameSite is for same site enforcment
        }));
    } else {
        app.use(session({
            secret: process.env.SESSION_SECRET,
            cookie: {}
        }));
    }
}

module.exports = theSession;