import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

import { getUserInfo } from "@/api/user";
import { addPost } from "@/api/post";

Vue.use(Vuex);

const resourceHost = 'http://localhost:3301'

const enhanceAccessToeken = () => {
    const { accessToken } = localStorage
    if (!accessToken) return
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    console.log("11111111111111");
}
enhanceAccessToeken();
console.log('2222222222222222');

export const store = new Vuex.Store({
    state: {
        accessToken: null,
        count: 88494,
        name: ''
    },
    getters: {
        isAuthenticated(state) {
            state.accessToken = state.accessToken || localStorage.accessToken
            return state.accessToken
        },
        getCounter: function (state) {
            return state.count;
        },
        name: state => state.name
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
                getUserInfo().then((response) => {
                    const data = response.data
                    commit('SET_NAME', data.name);
                })
            })
        },
        LOGOUT({ commit }) {
            axios.defaults.headers.common['Authorization'] = undefined
            commit('LOGOUT')
        },
        ADDPOST({ commit }) {
            addPost().then((response) => {
                if (response.result) {

                }
            })
        }
    }
})