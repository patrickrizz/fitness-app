'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('CreateStrategies', [{
            id: '1',
            strategy: 'FST-7',
            xp_level: '',
            strategy_description: 'Never even thought about fitness until now',
            strategy_map: '',
            createdAt: '2000-01-01 00:00:00',
            updatedAt: '2000-01-01 00:00:00'
        }, {
            id: '2',
            strategy: 'German Volume Training',            
            xp_level: '',
            strategy_description: 'Some Experience, Fitness is a hobby right now',
            strategy_map: '',
            createdAt: '2000-01-01 00:00:00',
            updatedAt: '2000-01-01 00:00:00'
        }, {
            id: '3',
            strategy: 'Push-Pull-Legs',
            xp_level: '',
            strategy_description: 'Proficient, gaining knowledge',
            strategy_map: '',
            createdAt: '2000-01-01 00:00:00',
            updatedAt: '2000-01-01 00:00:00'
        }, {
            id: '4',
            strategy: 'Push-Pull',
            xp_level: '',
            strategy_description: 'Fitness is a lifestlyle',
            strategy_map: '',
            createdAt: '2000-01-01 00:00:00',
            updatedAt: '2000-01-01 00:00:00'
        }, {
            id: '5',
            strategy: 'Aerobics',
            xp_level: '',
            strategy_description: 'Proffessional, Athlete',
            strategy_map: '',
            createdAt: '2000-01-01 00:00:00',
            updatedAt: '2000-01-01 00:00:00'
        }, {
            id: '6',
            strategy: 'Yoga',
            xp_level: '',
            strategy_description: 'Proffessional, Athlete',
            strategy_map: '',
            createdAt: '2000-01-01 00:00:00',
            updatedAt: '2000-01-01 00:00:00'
        }, {
            id: '7',
            strategy: 'HIIT',
            xp_level: '',
            strategy_description: 'Proffessional, Athlete',
            strategy_map: '',
            createdAt: '2000-01-01 00:00:00',
            updatedAt: '2000-01-01 00:00:00'
        }, {
            id: '8',
            strategy: 'Tabata',
            xp_level: '',
            strategy_description: 'Proffessional, Athlete',
            strategy_map: '',
            createdAt: '2000-01-01 00:00:00',
            updatedAt: '2000-01-01 00:00:00'
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('CreateStrategies', null, {});
    }
};