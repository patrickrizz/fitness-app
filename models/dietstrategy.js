'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DietStrategy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  DietStrategy.init({
    user_id: DataTypes.STRING,
    diet_strategy: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'DietStrategy',
  });
  return DietStrategy;
};