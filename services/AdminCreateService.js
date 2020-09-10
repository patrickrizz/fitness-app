const { CreateExercise, CreateExperienceLevel, CreateGoal, CreateObjective, CreateRole, CreateStrategy } = require('../models')
const AdminCreateRouteService = require('./AdminCreateRouteService')

class AdminCreate {
    constructor(req, res) {
        this._req = req
        this._res = res
    }

    async createExercise() {
        let { exercise, muscle, type_of_exercise, exercise_description, equipment } = this._req.body

        // Validate exercise doesn't exsist
        let validate = await CreateExercise.findOne({
            where: { exercise }
        })

        if (!validate) {
            (equipment === 'on') ? equipment = 1 : equipment = 0
            // Add excersices to db
            CreateExercise.findOrCreate({
                where: { exercise, muscle, type_of_exercise, exercise_description, equipment }
            })

            await this._req.flash(
                'success_msg',
                `${exercise} exercise created`
            )

            await this._res.redirect('/admin/create/create_exercise')
        } else {
            // Push validation errors
            let errors = []
            let params = await new AdminCreateRouteService().params()
            errors.push({ msg: `${validate.dataValues.exercise} exercise already exists` })

            this._res.render('admin/create_exercise', { errors, title: 'Exercises', ...params })
        }
    }

    async createExperienceLevel() {
        let { xp_level, xp_description } = this._req.body

        // Validate xp doesn't exsist
        let validate = await CreateExperienceLevel.findOne({
            where: { xp_level }
        })

        if (!validate) {
            // Add xp to db
            CreateExperienceLevel.findOrCreate({
                where: { xp_level, xp_description }
            })

            await this._req.flash(
                'success_msg',
                `${xp_level} experience created`
            )

            await this._res.redirect('/admin/create/create_experience')
        } else {
            // Push validation errors
            let errors = []
            let params = await new AdminCreateRouteService().params()

            errors.push({ msg: `${validate.dataValues.xp_level} already exists` })
            this._res.render('admin/create_settings', { errors, title: 'Experience Levels', ...params })
        }
    }

    async createGoal() {
        let { goal, goal_description } = this._req.body

        // Validate xp doesn't exsist
        let validate = await CreateGoal.findOne({
            where: { goal }
        })

        if (!validate) {
            // Add xp to db
            CreateGoal.findOrCreate({
                where: { goal, goal_description }
            })

            await this._req.flash(
                'success_msg',
                `${goal} goal created`
            )

            await this._res.redirect('/admin/create/create_goal')
        } else {
            // Push validation errors
            let errors = []
            let params = await new AdminCreateRouteService().params()

            errors.push({ msg: `${validate.dataValues.goal} goal already exists` })
            this._res.render('admin/create_settings', { errors, title: 'Goals', ...params })
        }
    }

    async createObjective() {
        let { objective, objective_description } = this._req.body

        // Validate xp doesn't exsist
        let validate = await CreateObjective.findOne({
            where: { objective }
        })

        if (!validate) {
            // Add xp to db
            CreateObjective.findOrCreate({
                where: { objective, objective_description }
            })

            await this._req.flash(
                'success_msg',
                `${objective} objective created`
            )

            await this._res.redirect('/admin/create/create_objective')
        } else {
            // Push validation errors
            let errors = []
            let params = await new AdminCreateRouteService().params()

            errors.push({ msg: `${validate.dataValues.objective} objective already exists` })
            this._res.render('admin/create_settings', { errors, title: 'Objectives', ...params })
        }
    }

    async createRole() {
        let { role, role_description } = this._req.body

        // Validate xp doesn't exsist
        let validate = await CreateRole.findOne({
            where: { role }
        })

        if (!validate) {
            // Add xp to db
            CreateRole.findOrCreate({
                where: { role, role_description }
            })

            await this._req.flash(
                'success_msg',
                `${role} role created`
            )

            await this._res.redirect('/admin/create/create_role')
        } else {
            // Push validation errors
            let errors = []
            let params = await new AdminCreateRouteService().params()

            errors.push({ msg: `${validate.dataValues.role} role already exists` })
            this._res.render('admin/create_settings', { errors, title: 'Roles', ...params })
        }
    }

    async createStrategy() {
        let { strategy, xp_level, goal, strategy_description, strategy_map} = this._req.body

        // Validate xp doesn't exsist
        let validate = await CreateStrategy.findOne({
            where: { strategy }
        })

        if (!validate) {
            // Add xp to db
            CreateStrategy.findOrCreate({
                where: { strategy, xp_level, goal, strategy_description, strategy_map }
            })

            await this._req.flash(
                'success_msg',
                `${strategy} strategy created`
            )

            await this._res.redirect('/admin/create/create_strategy')
        } else {
            // Push validation errors
            let errors = []
            let params = await new AdminCreateRouteService().params()

            errors.push({ msg: `${validate.dataValues.strategy} strategy already exists` })
            this._res.render('admin/create_strategy', { errors, title: 'Strategies', ...params })
        }
    }
}

module.exports = AdminCreate;