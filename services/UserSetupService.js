const { User, ExperienceLevel, Goal, Strategy } = require('../models')

class UserSetupService {
    constructor(req) {
        this.id = req.user.id
        this.req = req
    }

    userSetup() {
        let set_up = true
        let { xp_level, goals, strategy } = this.req.body

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

        // Adds xp level to db
        ExperienceLevel.findOne({
            where: { user_id: this.id }
        }).then(setup => {
            setup.update({ xp_level })
        })

        // Adds goals to db
        Goal.findOne({
            where: { user_id: this.id }
        }).then(setup => {
            setup.update({ goals })
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