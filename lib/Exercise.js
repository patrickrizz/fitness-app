const { CreateExercise } = require('../models')

class Exercise {
    constructor(muscle) {
        this._muscle = muscle;
        this._exercise = null
    }

    // Break here
    get exerciseData() {
        return this._exercise || (async () => {
            return await CreateExercise.findAll({
                where: {
                    muscle: this._muscle
                }
            }).then(data => {
                this._exercise = data;
                return this._exercise;
            })
        })();
    }
}

module.exports = Exercise;