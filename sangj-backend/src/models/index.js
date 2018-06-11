const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
    DB_NAME: db_name,
    DB_USER: db_user,
    DB_PASSWORD: db_password,
    DB_HOST: db_host
} = process.env;
const sequelize = new Sequelize(
    db_name, // db name
    db_user, // user name
    db_password, // user password
    {
        host: db_host,
        dialect: 'mysql',
        operatorsAliases: false,
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
        console.log('DB CONNECTED');
    }).catch(function (e) {
        throw new Error('DB CONNECT FAIL ' + e);
    });
    
db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;