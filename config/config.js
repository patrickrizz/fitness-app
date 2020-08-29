require('dotenv').config()
const fs = require('fs')

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB,
    dialect: "mysql"
  },
  test: {
    dialect: "mysql",
    storage: ":memory"
},
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB,
    host: process.env.DB_HOST,
    dialect: "postgres",
    // dialectOptions: {
    //   ssl: {
    //     ca: fs.readFileSync(__dirname + '/mysql-ca.crt')
    //   }
    // }
  }
}
