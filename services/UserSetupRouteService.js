const Users = require("../lib/User")
const Create = require("../lib/Create")

class UserSetupRouteService {
    constructor(req, id) {
        this._req = req
        this._profile = new Users(id)
        this._content = new Create()
    }

    async params() {
        if (!this._req.session.passport || !this._req.user) {
            let user = ''
            return user
        } else {
            let { user } = await this._req
<<<<<<< HEAD
            let profile = await this._profile.getUserById
            let objective = await this._content.objectiveData
            let experienceLevel = await this._content.experienceLevelData
            let strategy = await this._content.strategyData
            // let exercises = await this._profile.getUserById.dataValues.Workout.dataValues.workout
=======
            let profile = await this._profile.userData
            let objective = await this._content.objectiveData
            let experienceLevel = await this._content.experienceLevelData
            let strategy = await this._content.strategyData
            // let exercises = await this._profile.userData.dataValues.Workout.dataValues.workout
>>>>>>> bc768e9fa9fec1c5e597896d4b3c02523c6aa779

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

module.exports = UserSetupRouteService;