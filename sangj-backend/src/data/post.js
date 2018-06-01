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
    // offset: postId,
    // limit: 3,
    getPost: (postId) => {
        return db.post.findAll({
            order: [
                ['_uid', 'DESC']
            ]
        })
    }
}

module.exports = post