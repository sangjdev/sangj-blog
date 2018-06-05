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
                const error = new Error('No Authorization headers');
                error.status = 401;
                next(error);
            }

            try {
                req.user = this.verify(authorization)
            } catch (e) {
                const error = new Error('JWT expired');
                error.status = 401;
                next(error);
            }

            next()
        }
    },
    verify(token) {
        return jwt.verify(token.replace(/^Bearer\s/, ''), secret)
    }
}

module.exports = auth;