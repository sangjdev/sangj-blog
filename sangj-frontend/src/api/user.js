import request from '@/utils/request'

export function getUserInfo() {
    // const data = {}
    return request({
        url: '/user/info',
        method: 'get'
    })

    // const data = {
    //     username,
    //     password
    //   }
    //   return request({
    //     url: '/login/login',
    //     method: 'post',
    //     data
    //   })
    // }
    
    // export function logout() {
    //   return request({
    //     url: '/login/logout',
    //     method: 'post'
    //   })
    // }
    
    // export function getUserInfo(token) {
    //   return request({
    //     url: '/user/info',
    //     method: 'get',
    //     params: { token }
    //   })
}