const { User, Experience, Goal, Strategy } = require('../models')

class UserSetupService {
    constructor(req) {
        this.id = req.user.id
        this.req = req
    }

    userSetup() {
        let set_up = true
        let { xp, goals, strategy } = this.req.body

        // User.findOne({
        //     where: { id: this.id },
        //     include: [Experience, Goal]
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
        Experience.findOne({
            where: { user_id: this.id }
        }).then(setup => {
            setup.update({ xp })
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