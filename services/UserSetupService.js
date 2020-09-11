const { User, ExperienceLevel, Objective, Strategy, UserStats } = require('../models')

class UserSetupService {
    constructor(req) {
        this.id = req.user.id
        this.req = req
    }

    userSetup() {
        let set_up = true
        let { weight, xp_level, objective, strategy } = this.req.body

        // User.findOne({
        //     where: { id: this.id },
        //     include: [ExperienceLevel, Goal]
        // }).then((setup => {
        //     setup.update({
        //         xp, goal
        //     })
        // }))

       // Once setup is complete, set to true
        User.findOne({
            where: { id: this.id }
        }).then(setup => {
            setup.update({ set_up })
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