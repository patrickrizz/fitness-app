'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CreateStrategy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  CreateStrategy.init({
    strategy: DataTypes.STRING,
    xp_level: DataTypes.STRING,
    strategy_description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'CreateStrategy',
  });
  return CreateStrategy;
};