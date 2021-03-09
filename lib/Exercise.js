const { CreateChestExercise, CreateTricepsExercise, CreateBicepsExercise, CreateLegsExercise, CreateBackExercise, CreateShouldersExercise } = require('../database/models')

class Exercise {
    constructor(id) {
        this._exercise = null
        this._id = id
    }

    // Break here
    get chestData() {
        return this._exercise || (async () => {
            return await CreateChestExercise.findAll({}).then(data => {
                this._exercise = data;
                return this._exercise;
            })
        })();
    }

    get chestExercise() {
        return this._exercise || (async () => {
            return await CreateChestExercise.findByPk(this._id).then(data => {
                this._exercise = data;
                return this._exercise;
            })
        })();
    }

    get tricepsData() {
        return this._exercise || (async () => {
            return await CreateTricepsExercise.findAll({}).then(data => {
                this._exercise = data;
                return this._exercise;
            })
        })();
    }

    get tricepsExercise() {
        return this._exercise || (async () => {
            return await CreateTricepsExercise.findByPk(this._id).then(data => {
                this._exercise = data;
                return this._exercise;
            })
        })();
    }

    get bicepsData() {
        return this._exercise || (async () => {
            return await CreateBicepsExercise.findAll({}).then(data => {
                this._exercise = data;
                return this._exercise;
            })
        })();
    }

    get bicepsExercise() {
        return this._exercise || (async () => {
            return await CreateBicepsExercise.findByPk(this._id).then(data => {
                this._exercise = data;
                return this._exercise;
            })
        })();
    }

    get legsData() {
        return this._exercise || (async () => {
            return await CreateLegsExercise.findAll({}).then(data => {
                this._exercise = data;
                return this._exercise;
            })
        })();
    }

    get legsExercise() {
        return this._exercise || (async () => {
            return await CreateLegsExercise.findByPk(this._id).then(data => {
                this._exercise = data;
                return this._exercise;
            })
        })();
    }

    get backData() {
        return this._exercise || (async () => {
            return await CreateBackExercise.findAll({}).then(data => {
                this._exercise = data;
                return this._exercise;
            })
        })();
    }

    get backExercise() {
        return this._exercise || (async () => {
            return await CreateBackExercise.findByPk(this._id).then(data => {
                this._exercise = data;
                return this._exercise;
            })
        })();
    }

    get shouldersData() {
        return this._exercise || (async () => {
            return await CreateShouldersExercise.findAll({}).then(data => {
                this._exercise = data;
                return this._exercise;
            })
        })();
    }

    get shouldersExercise() {
        return this._exercise || (async () => {
            return await CreateShouldersExercise.findByPk(this._id).then(data => {
                this._exercise = data;
                return this._exercise;
            })
        })();
    }
}

module.exports = Exercise;