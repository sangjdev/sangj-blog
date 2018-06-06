const postData = require('../../data/post')
const utils = require('../../utils')

exports.addPost = async function (req, res) {

    const { cate, output, name, title, subtitle } = req.body;
    const date = utils.getYMD()

    const result = await postData.addPost({
        cate: cate.value,
        color: cate.color,
        output, name, title, subtitle, date
    })
    res.json({ 'result': 'success' });
}

exports.getList = async function (req, res) {

    const cate = decodeURI(req.query.cate);
    const page = parseInt(req.query.page)
    const limit = parseInt(req.query.limit)
    const offset = ((page - 1) * 3)

    const result = {
        items: '',
        count: ''
    }
    const countArr = await postData.getCount({ cate })
    result.count = JSON.parse(JSON.stringify(countArr[0])).count
    result.items = await postData.getList({ cate, offset, limit })

    res.json(result);
}

exports.getCatelist = async function (req, res) {

    const cateList = await postData.getCatelist()

    res.json(cateList);
}

exports.getListByCate = async function (req, res) {

    const name = req.params.name
    const list = await postData.getListByCate(name)

    res.json(list);
}