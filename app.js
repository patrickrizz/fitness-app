require('dotenv').config({ silent: true })
require('./initializers/googleAuth')
const flash = require('express-flash')
const express = require('express')
const path = require('path');
const app = express();
const cookieParser = require('cookie-parser')
const session = require('express-session')
const passport = require('passport')

let indexRouter = require('./routes/indexRoute')
let authRouter = require('./routes/authRoute');
const { Users } = require('../models')

//view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')))

//express session
app.use(session({
    secret: [process.env.SESSION_SECRET, process.env.SESSION_SECRET_2],
    name: 'awesomeSession',
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 60000
    } //only used with https, can't with http. It secures the cookie, sameSite is for same site enforcment
}));

//passport middleware
app.use(passport.initialize())
app.use(passport.session())

//express flash
app.use(flash())

//global variables and remove headers
app.use(function (req, res, next) {
    res.locals.success_msg = req.flash('success_msg')
    res.locals.error_msg = req.flash('error_msg')
    res.locals.error = req.flash('error')
    res.removeHeader('X-Powered-By')
    res.removeHeader('Server')
    next()
})

//routes
app.use('/', indexRouter)
app.use('/auth', authRouter)

//404
app.use((req, res, next) => {
    res.status(404).send('<h1 style="text-align: center font-size: 3.5em">404 Reqeust Not Found</h1>')
})

module.exports = app