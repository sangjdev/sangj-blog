const router = require('express').Router()
const ctrl = require('./post.ctrl')
const auth = require('../auth')
const utils = require('../../utils')

router.post('/add', auth.ensureAuth(), utils.wrapAsync(ctrl.addPost))
router.delete('/delete', auth.ensureAuth(), utils.wrapAsync(ctrl.deletePostById));
router.put('/update', auth.ensureAuth(), utils.wrapAsync(ctrl.updatePostById))

router.get('/list/all', utils.wrapAsync(ctrl.getListAll))
router.get('/list', utils.wrapAsync(ctrl.getList))
router.get('/cate', utils.wrapAsync(ctrl.getCatelist))
router.get('/cate/count', utils.wrapAsync(ctrl.getCatelistCount))
router.get('/list/cate/:name', utils.wrapAsync(ctrl.getListByCate))
router.get('/detail/:id', utils.wrapAsync(ctrl.getPost))

module.exports = router;