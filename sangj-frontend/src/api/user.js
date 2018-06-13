import request from '@/utils/request'

export function getUserInfo() {
    // const data = {}
    return request({
        url: '/user/info',
        method: 'get'
    })
}

export function login({ username, password }) {
    return request({
        url: '/user/login',
        withCredentials: true,
        data: {
            username: username,
            password: password
        },
        method: 'post'
    })
}

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

export function logout() {
    return request({
        url: '/login/logout',
        method: 'post'
    })
}

    // export function getUserInfo(token) {
    //   return request({
    //     url: '/user/info',
    //     method: 'get',
    //     params: { token }
    //   })
// }