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

exports.getListAll = async function (req, res) {

    const list = await postData.getListAll();

    res.json(list);
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

exports.getCatelistCount = async function (req, res) {

    const cateCountList = await postData.getCatelistCount()

    res.json(cateCountList)
}

exports.getListByCate = async function (req, res) {

    const name = req.params.name
    const list = await postData.getListByCate(name)

    res.json(list);
}

exports.getPost = async function (req, res, next) {

    const id = req.params.id
    const post = await postData.getPostById(id)

    if (utils.isEmpty(post)) {
        const error = new Error('Invalid id');
        error.status = 400;
        next(error);
        return;
    }

    res.json(post);
}

exports.deletePostById = async function (req, res, next) {

    const { id } = req.body;
    const result = await postData.deletePostById(id)
    if (result) {
        res.json({ success: 'success' });
    } else {
        const error = new Error('Invalid id');
        error.status = 400;
        next(error);
        return;
    }
}

exports.updatePostById = async function (req, res, next) {

    const { title, subtitle, content, id } = req.body;

    const result = await postData.updatePostById({ title, subtitle, content, id })

    if (result) {
        res.json({ success: 'success' });
    } else {
        const error = new Error('Invalid id');
        error.status = 400;
        next(error);
        return;
    }
}