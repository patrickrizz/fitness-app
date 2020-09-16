const Users = require('../lib/User')
const Exercise = require('../lib/Exercise')
const { CreateStrategy, Strategy } = require('../models')
class CreateWorkoutForUserService {
    constructor(id) {
        this._user_id = id
        this._userData = new Users(id).userData
    }

    async createWorkout() {
        let userData = await this._userData
        let strategy = userData.Strategy.dataValues.strategy

        //if user didn't pick a strategy, get strategies based on experience and objective, randomly pick a strategy, add it to the database for the user, then get strategy template...finsih with else directions
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
            //if a user already has a strategy, get the template
            //get strategy template
            let exerciseMap = await this._getExerciseMap()
            //loop through each object
            for (let i = 0; i < exerciseMap.length; i++) {
                //add number of workouts per week to object properties
                exerciseMap[i]['numOfWorkoutsPerWeek'] = '5'

                //select how many muscles exercised per day based on number of days for workout week (3, 5, 6, 2 a days for 5 days)
                switch (exerciseMap[i].numOfWorkoutsPerWeek) {
                    case '3':
                        //randomly slect exercises based on muscle type and how many muscles per day determined already
                        return
                    case '5':
                        let workout = {
                            consecutiveRestDays: [
                                [
                                    {
                                        id: 1,
                                        muscleGroupsAmmount: 2
                                    },
                                    {
                                        muscleGroupsAmmount: 1
                                    },
                                    {
                                        muscleGroupsAmmount: 1
                                    },
                                    {
                                        muscleGroupsAmmount: 1
                                    },
                                    {
                                        muscleGroupsAmmount: 1
                                    },
                                    {
                                        muscleGroupsAmmount: 0
                                    },
                                    {
                                        muscleGroupsAmmount: 0
                                    }
                                ],
                                [
                                    {
                                        id: 1,
                                        muscleGroupsAmmount: 2
                                    },
                                    {
                                        id: 2,
                                        muscleGroupsAmmount: 0
                                    },
                                    {
                                        id: 3,
                                        muscleGroupsAmmount: 2
                                    },
                                    {
                                        id: 4,
                                        muscleGroupsAmmount: 0
                                    },
                                    {
                                        id: 5,
                                        muscleGroupsAmmount: 2
                                    },
                                    {
                                        id: 6,
                                        muscleGroupsAmmount: 0
                                    },
                                    {
                                        id: 7,
                                        muscleGroupsAmmount: 0
                                    }
                                ]
                            ],
                            nonConsecutiveRestDays: [
                                [
                                    {
                                        id: 1,
                                        muscleGroupsAmmount: 2
                                    },
                                    {
                                        muscleGroupsAmmount: 1
                                    },
                                    {
                                        muscleGroupsAmmount: 1
                                    },
                                    {
                                        muscleGroupsAmmount: 0
                                    },
                                    {
                                        muscleGroupsAmmount: 1
                                    },
                                    {
                                        muscleGroupsAmmount: 1
                                    },
                                    {
                                        muscleGroupsAmmount: 0
                                    }
                                ]
                            ]
                        }

                        //select workout week based on rest day configuration
                        let workoutSchedule = workout.consecutiveRestDays

                        //pick a random number to select a random workout schedule
                        let randomWeek = this._randomeize(workoutSchedule.length)

                        //put random number into array
                        workoutSchedule = workoutSchedule[randomWeek]

                        //input the base exercise
                        this._addBaseMuscleGroup(workoutSchedule)

                        //input the supplumental exercise
                        this._addSupplumentalMuscleGroup(workoutSchedule)

                        //create exercise object
                        workoutSchedule = this._addExercisesToMap(workoutSchedule)

                        //add exercise object to exercise map
                        exerciseMap[i]['schedule'] = await workoutSchedule

                        console.log(exerciseMap[i].schedule)
                        //randomly slect exercises based on muscle group and how many muscles per day determined already
                        return

                    case '6':
                        //randomly slect exercises based on muscle type and how many muscles per day determined already
                        return
                    case '2 a days':
                        //randomly slect exercises based on muscle type and how many muscles per day determined already
                        console.log('two')
                        return
                }

                //exerciseMap[i]['workout'] = '5'

            }
        }
    }

    async _addExercisesToMap(workoutSchedule) {
        for (let i = 0; i < workoutSchedule.length; i++) {
            let muscleGroupOne = await workoutSchedule[i].muscleGroupOne
            let muscleGroupTwo = await workoutSchedule[i].muscleGroupTwo
            let supplumentalOne = await workoutSchedule[i].supplumentalOne
            let supplumentalTwo = await workoutSchedule[i].supplumentalTwo

            if (muscleGroupOne) {
                let exercises = await new Exercise(muscleGroupOne).exerciseData
                for (let i = 0; i < exercises.length; i++) {
                    let exercise = await exercises[i].exercise
                    console.log(exercise)
                    if (muscleGroupOne === workoutSchedule[i].muscleGroupOne) {
                        workoutSchedule[i]['workout'] = exercise
                    }
                }
            }
            if (muscleGroupTwo) console.log('')
            if (supplumentalOne) console.log('')
            if (supplumentalTwo) console.log('')
        }


        //workoutSchedule[0]['workout'] = exercises
        return workoutSchedule
    }

    _addBaseMuscleGroup(workoutSchedule) {
        //create baseMuscleGroups array
        let baseMuscleGroups = ['chest', 'triceps', 'biceps', 'legs', 'back', 'shoulders']

        //push muscle group length into array and shuffle it
        let randomeBaseMuscleGroupOrder = this._randomizeMuscleGroupOrder(baseMuscleGroups.length - 1)

        for (let i = 0; i < workoutSchedule.length; i++) {
            //add an id to every object
            if (!workoutSchedule[i].id) this._addIdToObject(workoutSchedule[i - 1].id, workoutSchedule[i])

            //input randomized musclegroup array into first base muscle group
            this._addFirstBaseMuscleGroup(randomeBaseMuscleGroupOrder[i], workoutSchedule[i], baseMuscleGroups, randomeBaseMuscleGroupOrder)
            //input remainder of that array into Second base muscle group
            this._addSecondBaseMuscleGroup(workoutSchedule[i], baseMuscleGroups, randomeBaseMuscleGroupOrder)

            //make sure the following combinations don't happen
            if (
                workoutSchedule[i].muscleGroupOne === 'chest' && workoutSchedule[i].muscleGroupTwo === 'legs' ||
                workoutSchedule[i].muscleGroupOne === 'legs' && workoutSchedule[i].muscleGroupTwo === 'chest' ||
                workoutSchedule[i].muscleGroupOne === 'biceps' && !workoutSchedule[i].muscleGroupTwo ||
                workoutSchedule[i].muscleGroupOne === 'triceps' && !workoutSchedule[i].muscleGroupTwo
            ) this._addBaseMuscleGroup(workoutSchedule)
        }
    }

    _addSupplumentalMuscleGroup(workoutSchedule) {
        for (let i = 0; i < workoutSchedule.length; i++) {
            //input abs if id is odd and calves if even and traps if even, but not last 2 days
            if (workoutSchedule[i].id % 2 == 1 && workoutSchedule[i].muscleGroupsAmmount !== 0 && workoutSchedule[i].muscleGroupsAmmount !== 0) workoutSchedule[i]['supplumentalOne'] = 'abs'
            if (workoutSchedule[i].id % 2 == 0 && workoutSchedule[i].muscleGroupsAmmount !== 0 && workoutSchedule[i].muscleGroupsAmmount !== 0) {
                workoutSchedule[i]['supplumentalOne'] = 'calves'
                if (workoutSchedule[i].id < 6) workoutSchedule[i]['supplumentalTwo'] = 'traps'
            }
            if (workoutSchedule[i].muscleGroupsAmmount == 0) workoutSchedule[i]['rest'] = 'rest'
        }
    }

    _addIdToObject(id, arr) {
        arr['id'] = id + 1
    }

    _addFirstBaseMuscleGroup(id, workoutSchedule, baseMuscleGroups, randomeBaseMuscleGroupOrder) {
        if (workoutSchedule.muscleGroupsAmmount == 1) workoutSchedule['muscleGroupOne'] = baseMuscleGroups[id]
        return randomeBaseMuscleGroupOrder.splice(id, 1)
    }

    _addSecondBaseMuscleGroup(workoutSchedule, baseMuscleGroups, randomeBaseMuscleGroupOrder) {
        if (workoutSchedule.muscleGroupsAmmount == 2) {
            workoutSchedule['muscleGroupOne'] = baseMuscleGroups[randomeBaseMuscleGroupOrder[0]]
            workoutSchedule['muscleGroupTwo'] = baseMuscleGroups[randomeBaseMuscleGroupOrder[1]]
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

    _selectRandomStrategy(num) {
        return num[Math.floor(Math.random() * num)]
    }

    _randomeize(num) {
        return Math.floor(Math.random() * num)
    }

    _randomizeMuscleGroupOrder(nums) {
        //push array of strings into array of integers usings its length
        let countdown = nums
        let arr = []
        for (let i = countdown; i >= 0; i--) {
            arr[countdown - i] = i
        }

        //shuffle the array
        for (let i = arr.length - 1; i > 0; i--) {
            let j = this._randomeize(i)
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
        return arr
    }

    async _addStrategyToDb(randomStrategy) {
        let strategy = await CreateStrategy.findOne({ where: { id: randomStrategy } })
        strategy = strategy.dataValues.strategy

        await Strategy.findOne({ where: { user_id: this._user_id } })
            .then(s => { s.update({ strategy }) })
    }
}

module.exports = CreateWorkoutForUserService;