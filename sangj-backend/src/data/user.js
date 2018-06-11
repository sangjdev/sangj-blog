const db = require('../models');

const user = {
    findUserById: ({ username, password }) => {
        return db.user.findAll({
            where: { user_id: username, user_pw: password }
        })
    },
    registerUser: () => {
        return db.user.create({
            user_id: 'user_id',
            user_pw: 'user_pw',
            user_email: 'user_email'
        })
    }
}

module.exports = user;