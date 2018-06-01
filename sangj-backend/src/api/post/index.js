const router = require('express').Router()
const ctrl = require('./post.ctrl')
const auth = require('../auth')
const utils = require('../../utils')

router.post('/add', auth.ensureAuth(), utils.wrapAsync(ctrl.addPost))
router.get('/:postId', utils.wrapAsync(ctrl.getPost))
module.exports = router;