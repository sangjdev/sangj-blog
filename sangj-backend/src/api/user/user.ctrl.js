const userData = require('../../data/user')
const auth = require('../auth')
const utils = require('../../utils')

exports.register = async function (req, res) {

    const result = await userData.registerUser()

    if (!!result) {
        res.send("회원가입 성공");
    } else {
        res.send("회원가입 실패");
    }
    //TODO 회원가입 아이디 중복체크 로직
}

exports.login = async function (req, res, next) {

    const { username, password } = req.body;
    const result = await userData.findUserById({ username, password })

    if (!utils.isEmpty(result)) {
        const user = {
            id: result[0].user_id,
            name: result[0].user_name
        }
        const accessToken = auth.signToken(user);
        console.log('accessToken : ' + accessToken);
        res.json({ accessToken })
    } else {
        const error = new Error('Login Failure');
        error.status = 500;
        next(error);
    }
}

exports.info = function (req, res) {

    const userInfo = {
        id: req.user.id,
        name: req.user.name
    };
    res.json(userInfo);
}