import request from '@/utils/request'

export function addPost(postInfo) {
    const data = {
        output: postInfo.output,
        name: postInfo.name
    }
    return request({
        url: '/post/add',
        method: 'post',
        data: postInfo
    })
}

export function getList(query) {
    return request({
        url: '/post/list',
        method: 'get',
        params: query
    })
}