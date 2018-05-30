const db = require('../../models')
const userData = require('../../data/user')
const auth = require('../auth')
const utils = require('../../utils')
exports.register = function (req, res) {

    db.user.create({
        user_id: '123',
        user_pw: '123',
        user_email: '123'
    }).then(function (result) {
        res.send("1231231");
    }).catch(function (err) {
        //TODO: error handling
    });

    // res.send("1231231");
}

exports.login = async function (req, res, next) {

    const { username, password } = req.body;
    // console.log(`username : ${username} , password : ${password}`);

    // db.user.findAll({
    //     where: { user_id: username, user_pw: password }
    // })
    const result = await userData.findUserById({ username, password })
    //TODO: query결과가 담긴 result에 대한 처리 진행 auth            

    //TODO 아이디 중복체크 로직
    if (!utils.isEmpty(result)) {
        const accessToken = auth.signToken(result[0].user_id);
        console.log('accessToken : ' + accessToken);
        res.json({ accessToken })
    } else {
        console.log('에러가 어디로 갈까?')
        // let error = new Error('login error')
        // error.status = 500;
        // next(error);
        next(new Error('woops'));
        // res.status(500).json({ error: 'message' });
        // return res.status(401).json({ error: 'login failure' })
        // return res.status(403).json({ error: 'login failure' })
    }
}

exports.home = function (req, res) {
    let user
    try {
        user = auth.verify(req.headers.authorization)
    } catch (e) {

    }
    console.log(user)
}

exports.info = function (req, res) {
    // auth.ensureAuth();
    console.log('req.user : ' + req.user.id);
    console.log('req.user : ' + JSON.stringify(req.user));
    let userInfo = { name: req.user.id };
    res.json(userInfo);
}