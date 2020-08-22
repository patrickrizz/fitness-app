'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BodyType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  BodyType.init({
    user_id: DataTypes.INTEGER,
    body_type: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'BodyType',
  });
  return BodyType;
};