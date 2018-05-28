const router = require('express').Router()
const ctrl = require('./user.ctrl')
const auth = require('../auth')

router.get('/register', ctrl.register);
router.post('/login', ctrl.login);
router.get('/home', ctrl.home);

// auth.ensureAuth(),
router.get('/info', auth.ensureAuth(), ctrl.info);

module.exports = router;