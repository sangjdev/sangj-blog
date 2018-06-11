import axios from 'axios'

const service = axios.create({
    baseURL: 'http://localhost:11040',
    timeout: 5000
})

// service.interceptors.response.use(null, function (error) {
//     console.error(error)
//     if (error.status === 401) {
//         console.error('error 401')
//     }
//     return Promise.reject(error)
// })

// axios.interceptors.response.use(
//     response => response,
//     error => {
//         if (error.response.status === 401) { /* ...*/ }
//     });

export default service;