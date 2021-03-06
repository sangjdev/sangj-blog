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

import { login } from "@/api/user"

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
        },
        adminTitle: "어드민 페이지"
    },
    getters: {
        isAuthenticated(state) {
            state.accessToken = state.accessToken || localStorage.accessToken
            console.log(state.accessToken);
            return state.accessToken
        },
        name: state => state.name,
        listQuery: state => state.listQuery,
        cateInfo: state => state.cateInfo,
        total: state => state.total,
        adminTitle: state => state.adminTitle
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
        },
        SETADMINTITLE(state, title) {
            state.adminTitle = title
        }
    },
    actions: {
        LOGIN({ commit }, { username, password }) {
            return login({ username, password }).then(({ data }) => {
                console.log(data);
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
        },
        SETADMINTITLE({ commit }, title) {
            commit('SETADMINTITLE', title)
        }
    }
})