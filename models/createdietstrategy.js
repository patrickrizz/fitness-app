'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CreateDietStrategy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  CreateDietStrategy.init({
    diet_strategy: DataTypes.STRING,
    diet_strategy_description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'CreateDietStrategy',
  });
  return CreateDietStrategy;
};