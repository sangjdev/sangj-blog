const db = require('../models');
const utils = require('../utils')

const post = {
    addPost: ({ output, name }) => {
        return db.post.create({
            post_content: output,
            post_date: utils.getYMD(),
            user_id: name,
            use_yn: 'Y'
        })
    },
    getList: ({ offset, limit }) => {
        return db.post.findAll({
            offset: offset,
            limit: limit,
            order: [
                ['_uid', 'DESC']
            ]
        })
    },
    getCount: () => {
        return db.post.findAll({
            attributes: [[db.sequelize.fn('COUNT', db.sequelize.col('_uid')), 'count']]
        });
    }
}

module.exports = post