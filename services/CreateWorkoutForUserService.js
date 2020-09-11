const Users = require('../lib/User')
const { CreateStrategy, Strategy } = require('../models')

class CreateWorkoutForUserService {
    constructor(id) {
        this._user_id = id
        this._userData = new Users(id).userData
    }

    async createWorkout() {
        let userData = await this._userData
        let strategy = userData.Strategy.dataValues.strategy

        //if no strategy 
        if (!strategy) {
            //get strategies based on xp level and objective
            //push strategy ids into an array
            let strategies = await this._pushStrategyIdsToArray()

            //randomly pick strategy
            let randomStrategy = await this._selectRandomStrategy(strategies)
            console.log(randomStrategy)
            //add strategy to db
            await this._addStrategyToDb(randomStrategy)
            //create workout plan

        } else {            
            //if strategy make workout plan
            //get strategy template
            let exerciseMap = await this._getExerciseMap()
            //get
            for(let i = 0; i < exerciseMap.length; i++) {
                //add exercise to object properties
                exerciseMap[i]['exercise'] = 'five'
            }

            console.log(exerciseMap)
        }
    }

    async _getExerciseMap() {
        let strategy = await Strategy.findOne({ where: { user_id: this._user_id } })
        strategy = strategy.dataValues.strategy
        strategy = await CreateStrategy.findOne({ where: { strategy } })
        strategy = strategy.dataValues.strategy_map        
        strategy = JSON.parse(strategy)

        return strategy
    }

    async _getStrategies() {
        let userData = await this._userData
        let xp_level = userData.ExperienceLevel.dataValues.xp_level
        let objective = userData.Objective.dataValues.objective

        return CreateStrategy.findAll({ where: { xp_level, objective } })
    }

    async _pushStrategyIdsToArray() {
        let strategies = await this._getStrategies()
        let strategyId = []

        for (let i = 0; i < strategies.length; i++) {
            let ids = strategies[i].dataValues.id
            strategyId.push(ids)
        }

        return strategyId
    }

    _selectRandomStrategy(strategies) {
        return strategies[Math.floor(Math.random() * strategies.length)]
    }

    async _addStrategyToDb(randomStrategy) {
        let strategy = await CreateStrategy.findOne({ where: { id: randomStrategy } })
        strategy = strategy.dataValues.strategy

        await Strategy.findOne({ where: { user_id: this._user_id } })
            .then(s => { s.update({ strategy }) })
    }
}

module.exports = CreateWorkoutForUserService;