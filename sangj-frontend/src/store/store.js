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
        count: 88494,
        name: '',
        listQuery: {
            page: 1,
            limit: 5
        },
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
        count: function (state) {
            return state.count;
        },
        name: state => state.name,
        listQuery: state => state.listQuery,
        cateInfo: state => state.cateInfo,
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
        SETPAGE(state, listQuery) {
            state.listQuery = listQuery
        },
        SETCATEINFO(state, cateInfo) {
            state.cateInfo = cateInfo
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
        SETPAGE({ commit }, listQuery) {
            commit('SETPAGE', listQuery)
        },
        SETCATEINFO({ commit }, cateInfo) {
            commit('SETCATEINFO', cateInfo)
        }
    }
})