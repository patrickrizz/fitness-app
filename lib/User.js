const { User, ExperienceLevel, Role, Objective, Strategy } = require('../models')

class Users {
    constructor(userid) {
        this.user_id = userid;
        this.user = null;
    }

    // Break here
    get userData() {
        return this.user || (async () => {
            return await User.findAll({
                where: {
                    id: this.user_id
                },
                include: [ExperienceLevel, Role, Objective, Strategy]
            }).then(data => {
                this.user = data[0];
                return this.user;
            })
        })();
    }
}

module.exports = Users;