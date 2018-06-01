const db = require('../models');

const user = {
    findUserById: ({ username, password }) => {
        return db.user.findAll({
            where: { user_id: username, user_pw: password }
        })
    },
    registerUser: () => {
        return db.user.create({
            user_id: '123',
            user_pw: '123',
            user_email: '123'
        })
    }
}

module.exports = user;