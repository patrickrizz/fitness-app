const Users = require("../lib/User")
const Create = require("../lib/Create")

class IndexRoute {
    constructor(req, id) {
        this._req = req
        this._profile = new Users(id)
        this._content = new Create()
    }

    async params() {
        if (!this._req.session.passport || !this._req.user) {
            let user = ''
            return {
                user
            }
        } else {
            let user = await this._req.user
            let profile = await this._profile.getUserById
            let objective = await this._content.objectiveData
            let experienceLevel = await this._content.experienceLevelData
            let strategy = await this._content.strategyData
            // let exercises = await this._profile.getUserById.dataValues.Workout.dataValues.workout

            return {
                profile,
                user,
                objective,
                experienceLevel,
                strategy,
                // exercises
            }
        }
    }
}

module.exports = IndexRoute;