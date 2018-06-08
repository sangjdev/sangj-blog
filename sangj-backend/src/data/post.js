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
            where: { use_yn: 'Y' }
            // attributes: ['post_cate', 'post_title', '_uid']
        })
    },
    getList: ({ cate, offset, limit }) => {
        return db.post.findAll({
            where: { post_cate: cate, use_yn: 'Y' },
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
            where: { post_cate: cate, use_yn: 'Y' }
        });
    },
    getCatelist: () => {
        return db.post.findAll({
            attributes: [['post_cate', 'value'], ['post_color', 'color']],
            group: 'post_cate',
            where: { use_yn: 'Y' }
        });
    },
    getCatelistCount: () => {
        return db.post.findAll({
            attributes: [['post_cate', 'value'], ['post_color', 'color'], [db.sequelize.fn('COUNT', db.sequelize.col('_uid')), 'count']],
            group: 'post_cate',
            where: { use_yn: 'Y' }
        })
    },
    getListByCate: (name) => {
        return db.post.findAll({
            where: { post_cate: name, use_yn: 'Y' }
        })
    },
    getPostById: (id) => {
        return db.post.findAll({
            where: { _uid: id, use_yn: 'Y' }
        })
    },
    deletePostById: (id) => {
        return db.post.update({
            use_yn: 'N',
        }, { where: { _uid: id } })
    },
    updatePostById: ({ title, subtitle, content, id }) => {
        return db.post.update({
            post_title: title,
            post_subtitle: subtitle,
            post_content: content
        }, { where: { _uid: id } })
    }
}

module.exports = post