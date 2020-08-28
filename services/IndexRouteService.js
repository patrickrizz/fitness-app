const Users = require("../lib/User")

class IndexRouteService {
    constructor(req, id) {
        this._req = req
        this._profile = new Users(id)
    }

    async params() {
        if (!this._req.session.passport || !this._req.user) {
            let user = ''

            return {
                user: user
            }
        } else {
            let user = await this._req.user
            let profile = await this._profile.userData

            return {
                profile: profile,
                user: user
            }
        }
    }
}

module.exports = IndexRouteService;