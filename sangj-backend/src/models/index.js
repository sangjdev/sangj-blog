const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');
const sequelize = new Sequelize(
    'sangjblog', // db name
    'root', // user name
    'root', // user password
    {
        host: 'localhost',
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        define: {
            underscored: true,
            freezeTableName: true,
            timestamps: false
        }
    });

const db = {};

fs.readdirSync(__dirname).filter(function (file) {
    return (file.indexOf('.') !== 0) && (file !== 'index.js');
}).forEach(function (file) {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
});

sequelize
    .sync() // 테이블 생성
    .then(function () {
        console.log('DB 연결 성공');
    }).catch(function (e) {
        throw new Error('DB 연결 실패: ' + e);
    });

db.findUser = ({username, password}) => {
    return db.user.findAll({
        where: { user_id: username, user_pw: password }
    })
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;