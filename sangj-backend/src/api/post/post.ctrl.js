const postData = require('../../data/post')

exports.addPost = async function (req, res) {

    const { output, name } = req.body;
    const result = await postData.addPost({ output, name })
    console.log('result : ' + result);
}

exports.getList = async function (req, res) {

    const page = parseInt(req.query.page)
    const limit = parseInt(req.query.limit)
    const offset = ((page - 1) * 3)

    const result = {
        items: '',
        count: ''
    }
    const countArr = await postData.getCount()
    result.count = JSON.parse(JSON.stringify(countArr[0])).count
    result.items = await postData.getList({ offset, limit })
    
    res.json(result);
}