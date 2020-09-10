const express = require('express')
const router = express.Router()
const AdminCreateService = require('../services/AdminCreateService')
const AdminCreateRouteService = require('../services/AdminCreateRouteService')

// Create Excersice
router.get('/create_exercise', async (req, res) => {
    let params = await new AdminCreateRouteService(req).params()
    res.render('admin/create_exercise', { title: 'Exercises', ...params })
})

// Create Excersice Post
router.post('/create_exercise', async (req, res) => {
    await new AdminCreateService(req, res).createExercise()    
})

// Create Experience
router.get('/create_experience', async (req, res) => {
    let params = await new AdminCreateRouteService().params()
    res.render('admin/create_settings', { title: 'Experience Levels', ...params })
})

// Create Experience Post
router.post('/create_experience', async (req, res) => {
    await new AdminCreateService(req, res).createExperienceLevel()    
})

// Create Goal
router.get('/create_goal', async (req, res) => {
    let params = await new AdminCreateRouteService().params()
    res.render('admin/create_settings', { title: 'Goals', ...params })
})

// Create Goal Post
router.post('/create_goal', async (req, res) => {
    await new AdminCreateService(req, res).createGoal()    
})

// Create Objective
router.get('/create_objective', async (req, res) => {
    let params = await new AdminCreateRouteService().params()
    res.render('admin/create_settings', { title: 'Objectives', ...params })
})

// Create Objective Post
router.post('/create_objective', async (req, res) => {
    await new AdminCreateService(req, res).createObjective()    
})

// Create Role
router.get('/create_role', async (req, res) => {
    let params = await new AdminCreateRouteService().params()
    res.render('admin/create_settings', { title: 'Roles', ...params })
})

// Create Role Post
router.post('/create_role', async (req, res) => {
    await new AdminCreateService(req, res).createRole()    
})

// Create Strategy
router.get('/create_strategy', async (req, res) => {
    let params = await new AdminCreateRouteService().params()
    res.render('admin/create_strategy', { title: 'Strategies', ...params })
})

// Create Strategy Post
router.post('/create_strategy', async (req, res) => {
    await new AdminCreateService(req, res).createStrategy()    
})

module.exports = router