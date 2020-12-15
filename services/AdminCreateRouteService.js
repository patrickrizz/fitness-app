const Create = require("../lib/Create")

class AdminCreateRouteService {
    constructor(req, id) {
        this._req = req
        this._content = new Create()
    }

    async params() {
        //let exercise = await this._content.exerciseData
        let experience = await this._content.experienceData
        let objective = await this._content.objectiveData
        let role = await this._content.roleData
        let strategy = await this._content.strategyData

        return {
            //exercise,
            experience,
            objective,
            role,
            strategy
        }
    }
}

module.exports = AdminCreateRouteService;