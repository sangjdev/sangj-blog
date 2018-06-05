import request from '@/utils/request'

export function addPost(data) {
    return request({
        url: '/post/add',
        method: 'post',
        data
    })
}

export function getList(query) {
    return request({
        url: '/post/list',
        method: 'get',
        params: query
    })
}

export function getCateList() {
    return request({
        url: '/post/cate',
        method: 'get'
    })
}

export function getListByCate(name) {
    return request({
        url: '/post/list/cate/' + name,
        method: 'get'
    })
}