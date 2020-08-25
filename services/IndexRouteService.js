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
                user: user,
                logo: this._logo
            }
        } else {
            let user = await this._req.user
            let profile = await this._profile.userData

            return {
                profile: profile,
                user: user,
                logo: this._logo
            }
        }
    }
}

module.exports = IndexRouteService;