const { User, ExperienceLevel, Objective, Strategy, UserStats, Role } = require('../database/models')
const bcrypt = require('bcrypt')
const { v4: uuidv4 } = require('uuid')

class UserRegisterService {
    constructor(req, res, profile) {
        this._req = req
        this._res = res
        this._uuid = uuidv4()
        this._profile = profile
    }

    registerUserLocal() {
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
                                newUser.save()
                                await this._req.flash(
                                    'success_msg',
                                    'You are now registered and can log in'
                                )
                            })
                        } catch { (err => console.log(err)) }
                    })
                }
            }).then(() => {
                ExperienceLevel.findOrCreate({
                    where: { user_id: this._uuid }
                })
                Objective.findOrCreate({
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

    registerUserGoogle() {
        User.findOrCreate({
            where: {
                id: this._profile.id,
                google_id: this._profile.id,
                email: this._profile.emails[0].value,
                name: this._profile.displayName
            }
        })
        ExperienceLevel.findOrCreate({
            where: { user_id: this._profile.id }
        })
        Goal.findOrCreate({
            where: { user_id: this._profile.id }
        })
        Strategy.findOrCreate({
            where: { user_id: this._profile.id }
        })
        UserStats.findOrCreate({
            where: { user_id: this._profile.id }
        })
        Role.findOrCreate({
            where: { user_id: this._profile.id, role: 'member' }
        })
    }
}

module.exports = UserRegisterService;