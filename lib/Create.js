const { CreateExercise, CreateExperienceLevel, CreateObjective, CreateRole, CreateStrategy } = require('../models')

class Create {
    
    get exerciseData() {
        return (async () => {
            return await CreateExercise.findAll({})
        })();
    }

    get experienceData() {
        return (async () => {
            return await CreateExperienceLevel.findAll({})
        })();
    }

    get objectiveData() {
        return (async () => {
            return await CreateObjective.findAll({})
        })();
    }

    get roleData() {
        return (async () => {
            return await CreateRole.findAll({})
        })();
    }

    get strategyData() {
        return (async () => {
            return await CreateStrategy.findAll({})
        })();
    }
}

module.exports = Create;