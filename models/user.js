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
     User.hasOne(models.Experience, {foreignKey: 'user_id'})
     User.hasMany(models.Goal, {foreignKey: 'user_id'})
     User.hasMany(models.Strategy, {foreignKey: 'user_id'})
    }
  };
  User.init({
    google_id: {
      unique: true,
      type: DataTypes.STRING
    },
    facebook_id: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    set_up: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};