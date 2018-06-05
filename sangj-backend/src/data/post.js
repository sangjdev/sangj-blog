const db = require('../models');


const post = {
    addPost: ({ cate, color, output, name, title, subtitle, date }) => {
        return db.post.create({
            post_title: title,
            post_subtitle: subtitle,
            post_content: output,
            post_date: date,
            post_cate: cate,
            post_color: color,
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
    },
    getCatelist: () => {
        return db.post.findAll({
            attributes: [['post_cate', 'value'], ['post_color', 'color']],
            group: 'post_cate'
        });
    },
    getListByCate: (name) => {
        return db.post.findAll({
            where: { post_cate: name }
        })
    }
}

module.exports = post