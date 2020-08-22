'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasOne(models.BodyType, {foreignKey: 'user_id'})
      User.hasOne(models.DietStrategy, {foreignKey: 'user_id'})
      User.hasOne(models.Goal, {foreignKey: 'user_id'})
      User.hasOne(models.Preference, {foreignKey: 'user_id'})
      User.hasOne(models.Role, {foreignKey: 'user_id'})
      User.hasOne(models.UserStats, {foreignKey: 'user_id'})
    }
  };
  User.init({
    google_id: DataTypes.STRING,
    facebook_id: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};