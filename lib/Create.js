const { CreateChestExercise, CreateTricepsExercise, CreateBicepsExercise, CreateLegsExercise, CreateBackExercise, CreateShouldersExercise, CreateAbdominalExercise, CreateExperienceLevel, CreateObjective, CreateRole, CreateStrategy } = require('../models')

class Create {
    
    get chestExerciseData() {
        return (async () => {
            return await CreateChestExercise.findAll({})
        })();
    }

    get tricepsExerciseData() {
        return (async () => {
            return await CreateTricepsExercise.findAll({})
        })();
    }

    get bicepsExerciseData() {
        return (async () => {
            return await CreateBicepsExercise.findAll({})
        })();
    }

    get legsExerciseData() {
        return (async () => {
            return await CreateLegsExercise.findAll({})
        })();
    }

    get backExerciseData() {
        return (async () => {
            return await CreateBackExercise.findAll({})
        })();
    }

    get shouldersExerciseData() {
        return (async () => {
            return await CreateShouldersExercise.findAll({})
        })();
    }

    get abdominalExerciseData() {
        return (async () => {
            return await CreateAbdominalExercise.findAll({})
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