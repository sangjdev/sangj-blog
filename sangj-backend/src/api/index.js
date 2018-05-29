const router = require('express').Router();
const user = require('./user');

router.use('/user', user);

router.use(function (err, req, res, next) {
    console.log("에러!!")
    console.log(err)
    res.json({ error: err.message })
});

module.exports = router;