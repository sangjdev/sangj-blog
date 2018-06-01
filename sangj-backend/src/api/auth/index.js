const jwt = require('jsonwebtoken');
const secret = "secrey_key";
const expiresIn = 60 * 60;
// 60 * 60;

const auth = {
    signToken({ id, name }) {
        return jwt.sign({ id, name }, secret, { expiresIn });
    },
    ensureAuth() {
        return (req, res, next) => {
            const { authorization } = req.headers
            if (!authorization) {
                res.status(401)
                throw Error('No Authorization headers')
            }

            try {
                req.user = this.verify(authorization)
            } catch (e) {
                res.status(401)
                throw e
            }

            next()
        }
    },
    verify(token) {
        return jwt.verify(token.replace(/^Bearer\s/, ''), secret)
    }
}

module.exports = auth;