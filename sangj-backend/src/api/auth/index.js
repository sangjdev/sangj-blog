const jwt = require('jsonwebtoken');
const secret = "secrey_key";
const expiresIn  = 60 * 60;

const auth = {
    signToken (id) {
        return jwt.sign({id}, secret, {expiresIn});
    },
    verify (token) {
      return jwt.verify(token.replace(/^Bearer\s/, ''), secret)
    }
}

module.exports = auth;