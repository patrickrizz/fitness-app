const removeHeaders = require("./removeHeaders")
const theSession = require("./session")

const middleware = () => {
    removeHeaders()
    theSession()
}

module.exports = middleware