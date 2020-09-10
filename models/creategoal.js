'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CreateGoal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  CreateGoal.init({
    goal: DataTypes.STRING,
    goal_description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'CreateGoal',
  });
  return CreateGoal;
};