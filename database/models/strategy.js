'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Strategy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Strategy.init({
    user_id: DataTypes.STRING,
    strategy: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Strategy',
  });
  return Strategy;
};