const router = require('express').Router()
const ctrl = require('./user.ctrl')
const auth = require('../auth')
const utils = require('../../utils')

router.get('/register', utils.wrapAsync(ctrl.register));
router.post('/login', utils.wrapAsync(ctrl.login));

router.get('/info', auth.ensureAuth(), ctrl.info);

module.exports = router;