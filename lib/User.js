const { User, ExperienceLevel, Role, Objective, Strategy, Workout, UserStats } = require('../database/models')

class Users {
    constructor(userId, email) {
        this._userId = userId
        this._user = null
        this._email = email
    }

    get getUserById() {
        return this._user || (async () => {
            return await User.findAll({
                where: {
                    id: this._userId
                },
                include: [ExperienceLevel, Objective, Strategy, Workout]
            }).then(data => {
                this._user = data[0];
                return this._user;
            })
        })();
    }

    async verifyUser() {
        const user = await User.findOne({ where: { email: this._email } })
        return user ? true : false
    }

    createUser(password, googleId) {
        User.findOrCreate({ where: { id: this._userId, email: this._email, password, google_id: googleId, role: 'member' } })
        UserStats.findOrCreate({ where: { user_id: this._userId } })
        ExperienceLevel.findOrCreate({ where: { user_id: this._userId } })
        Objective.findOrCreate({ where: { user_id: this._userId } })
        Strategy.findOrCreate({ where: { user_id: this._userId } })
    }

    setupProfile({ setup, firstName, lastName, weight, xpLevel, objective, strategy }) {
        User.update({ setup, first_name: firstName, last_name: lastName }, { where: { id: this._userId } })
        UserStats.update({ weight }, { where: { id: this._userId } })
        ExperienceLevel.update({ xp_level: xpLevel }, { where: { id: this._userId } })
        Objective.update({ objective }, { where: { id: this._userId } })
        Strategy.update({ strategy }, { where: { id: this._userId } })
    }
}

module.exports = Users;