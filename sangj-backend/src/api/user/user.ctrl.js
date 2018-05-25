const db = require('../../models');
const auth = require('../auth')

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

exports.login = function (req, res) {

    const {username, password} = req.body;
    // console.log(`username : ${username} , password : ${password}`);

    
    // db.user.findAll({
    //     where: { user_id: username, user_pw: password}
    // })
    db.findUser({username, password})
    .then(function (result) {
        //TODO: query결과가 담긴 result에 대한 처리 진행 auth

        //TODO 아이디 중복체크 로직
        if (result) {
            const accessToken = auth.signToken(result[0].user_id);
            console.log('accessToken : ' + accessToken);
            res.json({ accessToken })
        } else {
            res.send("result 없음");
        }
    });
}

exports.home = function (req, res) {
    let user
    try {
        user = auth.verify(req.headers.authorization)
    } catch (e) {

    }
    console.log(user)
}