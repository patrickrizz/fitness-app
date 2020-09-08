'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CreateExercise extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  CreateExercise.init({
    exercise: DataTypes.STRING,
    muscle: DataTypes.STRING,
    type_of_exercise: DataTypes.STRING,
    equipment: DataTypes.BOOLEAN,
    exercise_description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'CreateExercise',
  });
  return CreateExercise;
};