'use strict';
const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const SequelizeMock = require('sequelize-mock');
let modelsPath = path.join(__dirname, '');
const basename = path.basename(path.join(modelsPath, 'index.spec.js'));
const db = {}

let sequelize = new SequelizeMock();

fs.readdirSync(modelsPath)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
  })
  .forEach(file => {
    const model = require(path.join(modelsPath, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
