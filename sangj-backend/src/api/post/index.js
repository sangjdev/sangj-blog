const router = require('express').Router()
const ctrl = require('./post.ctrl')
const auth = require('../auth')
const utils = require('../../utils')

router.post('/add', auth.ensureAuth(), utils.wrapAsync(ctrl.addPost))

router.get('/list', utils.wrapAsync(ctrl.getList))
router.get('/cate', utils.wrapAsync(ctrl.getCatelist))
router.get('/list/cate/:name', utils.wrapAsync(ctrl.getListByCate))

module.exports = router;