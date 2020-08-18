require('dotenv').config({ silent: true })
const express = require('express')
const path = require('path');
const middleware = require("./middleware/middleware")
const app = express()
const cookieParser = require('cookie-parser')

let indexRouter = require('./routes/indexRoute')

//view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')))


//init middleware
middleware()

//routes
app.use('/', indexRouter)
//app.use('/auth', require('./auth'))

//404
app.use((req, res, next) => { 
    res.status(404).send('<h1 style="text-align: center font-size: 3.5em">404 Reqeust Not Found</h1>')
})

module.exports = app