import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

import { addPost } from "@/api/post";

Vue.use(Vuex);

const resourceHost = 'http://localhost:3301'

const enhanceAccessToeken = () => {
    const { accessToken } = localStorage
    console.log('accessToken1: ' + accessToken);
    console.log('accessToken2: ' + localStorage.accessToken);
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
        }
    },
    getters: {
        isAuthenticated(state) {
            state.accessToken = state.accessToken || localStorage.accessToken
            return state.accessToken
        },
        getCounter: function (state) {
            return state.count;
        },
        name: state => state.name,
        listQuery: state => state.listQuery
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
        ADDPOST({ commit }, postInfo) {
            addPost(postInfo).then((response) => {
                if (response.result) {

                }
            })
        },
        SETPAGE({ commit }, listQuery) {
            console.log('listQeur : ' + listQuery)
            commit('SETPAGE', listQuery)
        }
    }
})