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
    getListAll: () => {
        return db.post.findAll({
            attributes: ['post_cate', 'post_title', '_uid']
        })
    },
    getList: ({ cate, offset, limit }) => {
        return db.post.findAll({
            where: { post_cate: cate },
            offset: offset,
            limit: limit,
            order: [
                ['_uid', 'DESC']
            ]
        })
    },
    getCount: ({ cate }) => {
        return db.post.findAll({
            attributes: [[db.sequelize.fn('COUNT', db.sequelize.col('_uid')), 'count']],
            where: { post_cate: cate }
        });
    },
    getCatelist: () => {
        return db.post.findAll({
            attributes: [['post_cate', 'value'], ['post_color', 'color']],
            group: 'post_cate'
        });
    },
    getCatelistCount: () => {
        return db.post.findAll({
            attributes: [['post_cate', 'value'], ['post_color', 'color'], [db.sequelize.fn('COUNT', db.sequelize.col('_uid')), 'count']],
            group: 'post_cate'
        })
    },
    getListByCate: (name) => {
        return db.post.findAll({
            where: { post_cate: name }
        })
    },
    getPostById: (id) => {
        return db.post.findAll({
            where: { _uid: id }
        })
    }
}

module.exports = post