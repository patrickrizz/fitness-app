const auth = require('./Auth')
const user = require('./User')

const tables = {
    auth,
    user
}
module.exports = {
    ...tables
}