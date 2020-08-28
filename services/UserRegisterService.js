const { User, Experience, Goals, Strategy, UserStats, Role } = require('../models')
const bcrypt = require('bcrypt')
const { v4: uuidv4 } = require('uuid')

class UserRegisterService {
    constructor(req, res) {
        this._req = req
        this._res = res
        this._uuid = uuidv4()
    }

    registerUser() {
        const { email, password, password2, name } = this._req.body
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
            this._res.render('sign-up', {
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
            }).then(user => {
                if (user) {
                    errors.push({ msg: 'Email already exists' })
                    this._res.render('sign-up', {
                        errors,
                        email,
                        password,
                        password2,
                        name
                    })
                } else {
                    const newUser = new User({
                        id: this._uuid,
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
                                await this._req.flash(
                                    'success_msg',
                                    'You are now registered and can log in'
                                )
                            })
                        }
                        catch { (err => console.log(err)) }
                    })
                }
            }).then(() => {
                Experience.findOrCreate({
                    where: { user_id: this._uuid }
                })
                Goals.findOrCreate({
                    where: { user_id: this._uuid }
                })
                Strategy.findOrCreate({
                    where: { user_id: this._uuid }
                })
                UserStats.findOrCreate({
                    where: { user_id: this._uuid }
                })
                Role.findOrCreate({
                    where: { user_id: this._uuid, role: 'member' }
                })
            })
        }
    }
}

module.exports = UserRegisterService;