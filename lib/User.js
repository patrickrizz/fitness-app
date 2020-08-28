const { User } = require('../models')
const { Experience } = require('../models')

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
                include: Experience
            }).then(data => {
                this.user = data[0];
                return this.user;
            })
        })();
    }

    // userData() {
    //     return this.user || (async () => {
    //         return await User.findOne({
    //             where: {id: this.user_id}
    //         }).then((setup => {
    //             return setup.update({})
    //         }))
    //     })()
    // }
}

module.exports = Users;