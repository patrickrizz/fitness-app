'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('CreateBicepsExercises', [{
        id: '1',
        exercise: 'exercise name',
        type_of_exercise: 'compound',
        equipment: '0',
        exercise_description: 'Description of exercise',
        createdAt: '2000-01-01 00:00:00',
        updatedAt: '2000-01-01 00:00:00'
      }
    ],
     {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('CreateBicepsExercises', null, {});
  }
};