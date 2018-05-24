const router = require('express').Router();
const ctrl = require('./user.ctrl');

router.get('/register', ctrl.register);
router.get('/login', ctrl.login);
router.get('/home', ctrl.home);

module.exports = router;