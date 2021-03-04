'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('CreateExperienceLevels', [{
            id: '1',
            xp_level: 'Neophyte',
            xp_description: 'Never even thought about fitness until now',
            createdAt: '2000-01-01 00:00:00',
            updatedAt: '2000-01-01 00:00:00'
        }, {
            id: '2',
            xp_level: 'Apprentice',
            xp_description: 'Some Experience, Fitness is a hobby right now',
            createdAt: '2000-01-01 00:00:00',
            updatedAt: '2000-01-01 00:00:00'
        }, {
            id: '3',
            xp_level: 'Adept',
            xp_description: 'Proficient, gaining knowledge',
            createdAt: '2000-01-01 00:00:00',
            updatedAt: '2000-01-01 00:00:00'
        }, {
            id: '4',
            xp_level: 'Expert',
            xp_description: 'Fitness is a lifestlyle',
            createdAt: '2000-01-01 00:00:00',
            updatedAt: '2000-01-01 00:00:00'
        }, {
            id: '5',
            xp_level: 'Master',
            xp_description: 'Proffessional, Athlete',
            createdAt: '2000-01-01 00:00:00',
            updatedAt: '2000-01-01 00:00:00'
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('CreateExperienceLevels', null, {});
    }
};