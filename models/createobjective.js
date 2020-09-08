'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CreateObjective extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  CreateObjective.init({
    objective: DataTypes.STRING,
    objective_description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'CreateObjective',
  });
  return CreateObjective;
};