const { User, ExperienceLevel, Objective, Strategy, UserStats } = require('../models')

class UserSetupService {
    constructor(req) {
        this.id = req.user.id
        this.req = req
    }

    userSetup() {
        let setUp = true
        let { weight, xp_level, objective, strategy, firstName, lastName } = this.req.body

       // Once setup is complete, set to true
        User.findOne({
            where: { id: this.id }
        }).then(setup => {
            setup.update({ setup: setUp, first_name: firstName, last_name: lastName })
        })

        // Add weight to db
        UserStats.findOne({
            where: { user_id: this.id }
        }).then(setup => {
            setup.update({ weight })
        })

        // Adds xp level to db
        ExperienceLevel.findOne({
            where: { user_id: this.id }
        }).then(setup => {
            setup.update({ xp_level })
        })

        // Adds goals to db
        Objective.findOne({
            where: { user_id: this.id }
        }).then(setup => {
            setup.update({ objective })
        })

        // Adds strategy to db
        Strategy.findOne({
            where: { user_id: this.id }
        }).then(setup => {
            setup.update({ strategy })
        })
    }
}

module.exports = UserSetupService;