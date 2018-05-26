const db = require('../models');

const user = {
    findUserById: ({ username, password }) => {
        return db.user.findAll({
            where: { user_id: username, user_pw: password }
        })
    }
}

module.exports = user;