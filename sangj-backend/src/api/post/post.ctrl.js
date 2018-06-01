const postData = require('../../data/post')

exports.addPost = async function (req, res) {

    const { output, name } = req.body;
    const result = await postData.addPost({ output, name })
    console.log('result : ' + result);
}

exports.getPost = async function (req, res) {

    let postId = req.params.postId;
    // const perPage = 3;
    // postId = ((postId - 1) * 3)
    const result = await postData.getPost(postId)
    const rs = JSON.parse(JSON.stringify(result))
    console.log('result : ');
    res.json(rs);
}