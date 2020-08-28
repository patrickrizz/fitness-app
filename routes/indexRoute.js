const express = require('express')
const router = express.Router()
const IndexRouteService = require('../services/IndexRouteService')
const UserSetupService = require('../services/UserSetupService')
const { ensureAuthenticated } = require('../lib/authentication')
const { User } = require('../models')
const bcrypt = require('bcrypt')
const { v4: uuidv4 } = require('uuid');

//landing page
router.get('/', async (req, res) => {
    let id
    (!req.user) ? email = null : id = req.user.id
    let params = await new IndexRouteService(req, id).params()
    res.render('index', { ...params })
})

router.get('/sign-up', (req, res) => {
    res.render('sign-up')
})

// Local auth routes
router.post('/sign-up', (req, res) => {
    const { email, password, password2, name } = req.body
    let errors = []

    if (!email || !password || !password2 || !name) {
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
            password2,
            name
        })
    } else {
        User.findOne({
            email: email,
            where: {
                email: email
            }
        })
            .then(user => {
                if (user) {
                    errors.push({ msg: 'Email already exists' })
                    res.render('sign-up', {
                        errors,
                        email,
                        password,
                        password2,
                        name
                    })
                } else {
                    const newUser = new User({
                        id: uuidv4(),
                        email,
                        password,
                        name
                    })

                    bcrypt.genSalt(10, (err, salt) => {
                        try {
                            bcrypt.hash(newUser.password, salt, async (err, hash) => {
                                if (err) throw err

                                newUser.password = hash
                                newUser
                                    .save()
                                await req.flash(
                                    'success_msg',
                                    'You are now registered and can log in'
                                )

                                res.redirect('/')

                            })
                        }
                        catch { (err => console.log(err)) }
                    })
                }
            })
    }
})

router.post('/set-up', ensureAuthenticated, (req, res) => {

    new UserSetupService(req).userSetup()

    res.redirect('/')
})

module.exports = router