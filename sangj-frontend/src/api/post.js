import request from '@/utils/request'

export function addPost(data) {
    return request({
        url: '/post/add',
        method: 'post',
        data
    })
}

export function getListAll() {
    return request({ 
        url: '/post/list/all',
        method: 'get'
    })
}

export function getList(query) {
    query.cate = encodeURI(query.cate)

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

export function getCateListCount() {
    return request({
        url: '/post/cate/count',
        method: 'get'
    })
}

export function getListByCate(name) {
    return request({
        url: '/post/list/cate/' + name,
        method: 'get'
    })
}

export function getPost(id) {
    return request({
        url: 'post/detail/' + id,
        method: 'get'
    })
}

export function deletePostById(id) {
    return request({
        url: 'post/delete/',
        method: 'delete',
        data: {
            id: id
        }
    })
}

export function updatePostById(data) {
    return request({
        url: 'post/update',
        method: 'put',
        data
    })
}