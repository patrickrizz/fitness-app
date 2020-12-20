const Create = require("../lib/Create")

class AdminCreateRouteService {
    constructor(req, id) {
        this._req = req
        this._content = new Create()
    }

    async params() {
        let chestExercise = await this._content.chestExerciseData
        let tricepsExercise = await this._content.tricepsExerciseData
        let bicepsExercise = await this._content.bicepsExerciseData
        let legsExercise = await this._content.legsExerciseData
        let backExercise = await this._content.backExerciseData
        let shouldersExercise = await this._content.shouldersExerciseData
        let abdominalExercise = await this._content.abdominalExerciseData
        let experience = await this._content.experienceData
        let objective = await this._content.objectiveData
        let role = await this._content.roleData
        let strategy = await this._content.strategyData

        return {
            chestExercise,
            tricepsExercise,
            bicepsExercise,
            legsExercise,
            backExercise,
            shouldersExercise,
            abdominalExercise,
            experience,
            objective,
            role,
            strategy
        }
    }
}

module.exports = AdminCreateRouteService;