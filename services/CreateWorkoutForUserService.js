const Users = require('../lib/User')
const Exercise = require('../lib/Exercise')
const { CreateStrategy, Strategy } = require('../database/models')

class CreateWorkoutForUserService {
    constructor(id) {
        this._user_id = id
        this._getUserById = new Users(id).userData
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
                                        muscleGroupsAmmount: 1
                                    },
                                    {
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
                                        muscleGroupsAmmount: 0
                                    },
                                    {
                                        muscleGroupsAmmount: 0
                                    }
                                ],
                                [
                                    {
                                        id: 1,
                                        muscleGroupsAmmount: 1
                                    },
                                    {
                                        muscleGroupsAmmount: 1
                                    },
                                    {
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
                                        muscleGroupsAmmount: 0
                                    }
                                ],
                                [
                                    {
                                        id: 1,
                                        muscleGroupsAmmount: 1
                                    },
                                    {
                                        muscleGroupsAmmount: 1
                                    },
                                    {
                                        muscleGroupsAmmount: 1
                                    },
                                    {
                                        muscleGroupsAmmount: 2
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
                                        muscleGroupsAmmount: 2
                                    },
                                    {
                                        muscleGroupsAmmount: 0
                                    },
                                    {
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
                        let randomWeek = this._randomize(workoutSchedule.length)

                        //put random number into array
                        workoutSchedule = workoutSchedule[randomWeek]

                        //input the base exercise
                        this._addBaseMuscleGroup(workoutSchedule)

                        //input the supplumental exercise
                        this._addSupplumentalMuscleGroup(workoutSchedule)

                        //create exercise object
                        workoutSchedule = this._addExercisesToMap(workoutSchedule)

                        //add exercise object to exercise map
                        workoutSchedule = exerciseMap[i]['schedule'] = await workoutSchedule


                        console.log(workoutSchedule)
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

            //base num of exercises off of skill level
            //

            //check for muscle group
            if (muscleGroupOne) {
                let exercises
                let exercise
                let numOfExercisesInDb
                let numOfExercisesInMusclegroup = 1
                let random
                let exercisesArray = []




                switch (muscleGroupOne) {
                    case "CHEST":
                        exercises = await new Exercise(null).chestData
                        numOfExercisesInDb = exercises.length

                        //create an array out of the number of exercises in db
                        for (let e = 0; e < numOfExercisesInDb; ++e) {
                            exercisesArray.push(exercises.length--)
                        }

                        //shuffle the array
                        this._shuffle(exercisesArray)


                        //add exercise to object
                        for (let a = 0; a < numOfExercisesInMusclegroup; a++) {
                            exercise = await new Exercise(exercisesArray[0]).chestExercise

                            //remove number from array to prevent from repeating itself
                            exercisesArray.splice(0, 1);

                            //add it to the object
                            workoutSchedule[i][`chest exercise ${a + 1}`] = exercise.dataValues.exercise
                        }

                        break
                    case "TRICEPS":
                        exercises = await new Exercise(null).tricepsData
                        numOfExercisesInDb = exercises.length

                        //create an array out of the number of exercises in db
                        for (let e = 0; e < numOfExercisesInDb; ++e) {
                            exercisesArray.push(exercises.length--)
                        }

                        //shuffle the array
                        this._shuffle(exercisesArray)


                        //add exercise to object
                        for (let a = 0; a < numOfExercisesInMusclegroup; a++) {
                            exercise = await new Exercise(exercisesArray[0]).tricepsExercise

                            //remove number from array to prevent from repeating itself
                            exercisesArray.splice(0, 1);

                            //add it to the object
                            workoutSchedule[i][`triceps exercise ${a + 1}`] = exercise.dataValues.exercise
                        }

                        break
                    case "BICEPS":
                        exercises = await new Exercise(null).bicepsData
                        numOfExercisesInDb = exercises.length

                        //create an array out of the number of exercises in db
                        for (let e = 0; e < numOfExercisesInDb; ++e) {
                            exercisesArray.push(exercises.length--)
                        }

                        //shuffle the array
                        this._shuffle(exercisesArray)


                        //add exercise to object
                        for (let a = 0; a < numOfExercisesInMusclegroup; a++) {
                            exercise = await new Exercise(exercisesArray[0]).bicepsExercise

                            //remove number from array to prevent from repeating itself
                            exercisesArray.splice(0, 1);

                            //add it to the object
                            workoutSchedule[i][`biceps exercise ${a + 1}`] = exercise.dataValues.exercise
                        }

                        break
                    case "LEGS":
                        exercises = await new Exercise(null).legsData
                        numOfExercisesInDb = exercises.length

                        //create an array out of the number of exercises in db
                        for (let e = 0; e < numOfExercisesInDb; ++e) {
                            exercisesArray.push(exercises.length--)
                        }

                        //shuffle the array
                        this._shuffle(exercisesArray)


                        //add exercise to object
                        for (let a = 0; a < numOfExercisesInMusclegroup; a++) {
                            exercise = await new Exercise(exercisesArray[0]).legsExercise

                            //remove number from array to prevent from repeating itself
                            exercisesArray.splice(0, 1);

                            //add it to the object
                            workoutSchedule[i][`legs exercise ${a + 1}`] = exercise.dataValues.exercise
                        }

                        break
                    case "BACK":
                        exercises = await new Exercise(null).backData
                        numOfExercisesInDb = exercises.length

                        //create an array out of the number of exercises in db
                        for (let e = 0; e < numOfExercisesInDb; ++e) {
                            exercisesArray.push(exercises.length--)
                        }

                        //shuffle the array
                        this._shuffle(exercisesArray)


                        //add exercise to object
                        for (let a = 0; a < numOfExercisesInMusclegroup; a++) {
                            exercise = await new Exercise(exercisesArray[0]).backExercise

                            //remove number from array to prevent from repeating itself
                            exercisesArray.splice(0, 1);

                            //add it to the object
                            workoutSchedule[i][`back exercise ${a + 1}`] = exercise.dataValues.exercise
                        }

                        break
                    case "SHOULDERS":
                        exercises = await new Exercise(null).shouldersData
                        numOfExercisesInDb = exercises.length

                        //create an array out of the number of exercises in db
                        for (let e = 0; e < numOfExercisesInDb; ++e) {
                            exercisesArray.push(exercises.length--)
                        }

                        //shuffle the array
                        this._shuffle(exercisesArray)


                        //add exercise to object
                        for (let a = 0; a < numOfExercisesInMusclegroup; a++) {
                            exercise = await new Exercise(exercisesArray[0]).shouldersExercise

                            //remove number from array to prevent from repeating itself
                            exercisesArray.splice(0, 1);

                            //add it to the object
                            workoutSchedule[i][`shoulders exercise ${a + 1}`] = exercise.dataValues.exercise
                        }

                        break
                }


            }
        }


        return workoutSchedule
    }

    _addBaseMuscleGroup(workoutSchedule) {
        //create baseMuscleGroups array
        let baseMuscleGroups = ['CHEST', 'TRICEPS', 'BICEPS', 'LEGS', 'BACK', 'SHOULDERS']

        //push muscle group length into array and shuffle it
        let randomeBaseMuscleGroupOrder = this._randomizeMuscleGroupOrder(baseMuscleGroups.length - 1)

        for (let i = 0; i < workoutSchedule.length; i++) {
            //add an id to every object
            if (!workoutSchedule[i].id) this._addIdToObject(workoutSchedule[i - 1].id, workoutSchedule[i])

            let invalid = true;
            let count = 0;
            while (invalid) {
                count++;
                if (count > 5) {
                    this._addBaseMuscleGroup(workoutSchedule)
                    return;
                }
                let tryThis = {
                    one: undefined,
                    two: undefined,
                };

                // attempt to find pair                
                if (workoutSchedule[i].muscleGroupsAmmount == 1) {
                    //input randomized musclegroup array into first base muscle group

                    tryThis.one = baseMuscleGroups[randomeBaseMuscleGroupOrder[0]]

                    if (!this._validate(tryThis.one, tryThis.two)) {
                        randomeBaseMuscleGroupOrder = this._shuffle(randomeBaseMuscleGroupOrder)
                        continue;
                    }

                    // accept 
                    workoutSchedule[i]['muscleGroupOne'] = tryThis.one;

                    // remove from pool
                    randomeBaseMuscleGroupOrder.splice(0, 1);

                    // continue
                    invalid = false;

                } else if (workoutSchedule[i].muscleGroupsAmmount == 2) {
                    //input remainder of that array into Second base muscle group

                    tryThis.one = baseMuscleGroups[randomeBaseMuscleGroupOrder[0]]
                    tryThis.two = baseMuscleGroups[randomeBaseMuscleGroupOrder[1]]


                    if (!this._validate(tryThis.one, tryThis.two)) {
                        randomeBaseMuscleGroupOrder = this._shuffle(randomeBaseMuscleGroupOrder)
                        continue;
                    }

                    // accept 
                    workoutSchedule[i]['muscleGroupOne'] = tryThis.one;
                    workoutSchedule[i]['muscleGroupTwo'] = tryThis.two;

                    // remove from pool
                    randomeBaseMuscleGroupOrder.splice(0, 2);

                    // continue
                    invalid = false;

                } else {
                    // continue
                    invalid = false;
                }
            }

        }
    }

    _validate(muscleGroupOne, muscleGroupTwo) {
        //make sure the following combinations don't happen
        if (
            (muscleGroupOne === 'chest' && muscleGroupTwo === 'legs') ||
            (muscleGroupOne === 'legs' && muscleGroupTwo === 'chest')
        ) {
            return false;
        }
        return true;
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
        workoutSchedule['muscleGroupOne'] = baseMuscleGroups[id]
        return randomeBaseMuscleGroupOrder.splice(id, 1)
    }

    _addSecondBaseMuscleGroup(workoutSchedule, baseMuscleGroups, randomeBaseMuscleGroupOrder) {
        console.log("two:", baseMuscleGroups, randomeBaseMuscleGroupOrder)
        workoutSchedule['muscleGroupOne'] = baseMuscleGroups[randomeBaseMuscleGroupOrder[0]]
        workoutSchedule['muscleGroupTwo'] = baseMuscleGroups[randomeBaseMuscleGroupOrder[1]]
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

    _randomize(num) {
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
            let j = this._randomize(i)
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
        return arr
    }

    _shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            let j = this._randomize(i)
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
        return arr;
    }

    async _addStrategyToDb(randomStrategy) {
        let strategy = await CreateStrategy.findOne({ where: { id: randomStrategy } })
        strategy = strategy.dataValues.strategy

        await Strategy.findOne({ where: { user_id: this._user_id } })
            .then(s => { s.update({ strategy }) })
    }
}

module.exports = CreateWorkoutForUserService;