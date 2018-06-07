import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex);

const resourceHost = 'http://localhost:3301'

const enhanceAccessToeken = () => {
    const { accessToken } = localStorage
    if (!accessToken) return
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
}
enhanceAccessToeken();

export const store = new Vuex.Store({
    state: {
        accessToken: null,
        name: '',
        listQuery: {
            cate: "",
            page: 1,
            limit: 5
        },
        total: 0,
        cateInfo: {
            value: "",
            color: "#ffffff"
        }
    },
    getters: {
        isAuthenticated(state) {
            state.accessToken = state.accessToken || localStorage.accessToken
            return state.accessToken
        },
        name: state => state.name,
        listQuery: state => state.listQuery,
        cateInfo: state => state.cateInfo,
        total: state => state.total
    },
    mutations: {
        LOGIN(state, { accessToken }) {
            console.log("accessToken : " + accessToken)
            state.accessToken = accessToken
            localStorage.accessToken = accessToken
        },
        LOGOUT(state) {
            state.accessToken = null
            localStorage.removeItem('accessToken')
            // delete localStorage.accessToken
        },
        SET_NAME(state, name) {
            state.name = name
        },
        SETPAGE(state, listQuery, cate) {
            const tmpQuery = {
                cate: cate,
                page: listQuery.page,
                limit: 5
            }
            state.listQuery = tmpQuery;
            // state.listQuery = listQuery
            // state.listQuery.cate = cate
        },
        INITPAGE(state) {
            const initQuery = {
                cate: "",
                page: 1,
                limit: 5
            }
            state.listQuery = initQuery;
        },
        SETCATEINFO(state, cateInfo) {
            state.cateInfo = cateInfo
        },
        SETTOTAL(state, total) {
            state.total = total
        }
    },
    actions: {
        LOGIN({ commit }, { username, password }) {
            return axios("http://localhost:3301/user/login", {
                method: "post",
                withCredentials: true,
                data: {
                    username,
                    password
                }
            }).then(({ data }) => {
                commit('LOGIN', data)
                axios.defaults.headers.common['Authorization'] = `Bearer ${data.accessToken}`;
            })
        },
        LOGOUT({ commit }) {
            axios.defaults.headers.common['Authorization'] = undefined
            commit('LOGOUT')
        },
        SETPAGE({ commit }, listQuery, cate) {
            commit('SETPAGE', listQuery, cate)
        },
        SETCATEINFO({ commit }, cateInfo) {
            commit('SETCATEINFO', cateInfo)
        },
        SETTOTAL({ commit }, total) {
            commit('SETTOTAL', total);
        }
    }
})