module.exports = function (sequelize, DataTypes) {
    var Post = sequelize.define('post', {
        post_uid: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: '_uid'
        },
        post_title: {
            type: DataTypes.STRING,
            field: 'post_title'
        },
        post_subtitle: {
            type: DataTypes.STRING,
            field: 'post_subtitle'
        },
        post_content: {
            type: DataTypes.TEXT,
            field: 'post_content'
        },
        post_date: {
            type: DataTypes.STRING,
            field: 'post_date'
        },
        post_cate: {
            type: DataTypes.STRING,
            field: 'post_cate'
        },
        post_color: {
            type: DataTypes.STRING,
            field: 'post_color'
        },
        user_id: {
            type: DataTypes.STRING,
            field: 'user_id'
        },
        use_yn: {
            type: DataTypes.STRING,
            field: 'use_yn'
        }
    });

    return Post;
};