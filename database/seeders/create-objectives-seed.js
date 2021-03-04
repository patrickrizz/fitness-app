'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('CreateObjectives', [{
            id: '1',
            objective: 'Loose weight',
            objective_description: 'Decreasing your weight',
            createdAt: '2000-01-01 00:00:00',
            updatedAt: '2000-01-01 00:00:00'
        }, {
            id: '2',
            objective: 'Loose fat / Lean out',
            objective_description: 'Decreaseing your fat percentage, does not always mean you will loose weight but you will look more lean',
            createdAt: '2000-01-01 00:00:00',
            updatedAt: '2000-01-01 00:00:00'
        }, {
            id: '3',
            objective: 'Gain weight',
            objective_description: 'Increase your weight',
            createdAt: '2000-01-01 00:00:00',
            updatedAt: '2000-01-01 00:00:00'
        }, {
            id: '4',
            objective: 'Strength',
            objective_description: 'Lift heavier weights',
            createdAt: '2000-01-01 00:00:00',
            updatedAt: '2000-01-01 00:00:00'
        }, {
            id: '5',
            objective: 'Speed',
            objective_description: 'Increase short-distance speed',
            createdAt: '2000-01-01 00:00:00',
            updatedAt: '2000-01-01 00:00:00'
        }, {
            id: '6',
            objective: 'Flexability',
            objective_description: 'Aerobics, yoga, stretching, become more flexable',
            createdAt: '2000-01-01 00:00:00',
            updatedAt: '2000-01-01 00:00:00'
        }, {
            id: '7',
            objective: 'Endurance',
            objective_description: 'Run and lift weights for longer periods of time',
            createdAt: '2000-01-01 00:00:00',
            updatedAt: '2000-01-01 00:00:00'
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('CreateObjectives', null, {});
    }
};