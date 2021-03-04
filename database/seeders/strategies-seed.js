'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Strategies', [{
            id: '1',
            user_id: '1',
            strategy: 'FST-7',
            createdAt: '2000-01-01 00:00:00',
            updatedAt: '2000-01-01 00:00:00'
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Strategies', null, {});
    }
};