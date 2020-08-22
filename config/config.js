require('dotenv').config()
const fs = require('fs')

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB,
    host: process.env.DB_HOST,
    dialect: "mysql"
  },
  test: {
    username: "root",
    password: null,
    database: "test",
    host: "localhost",
    dialect: "mysql"
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB,
    host: process.env.DB_HOST,
    dialect: "mysql",
    dialectOptions: {
      ssl: {
        ca: fs.readFileSync(__dirname + '/mysql-ca.crt')
      }
    }
  }
}
