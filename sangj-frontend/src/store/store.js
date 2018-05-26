import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex);

const resourceHost = 'http://localhost:3301'

const enhanceAccessToeken = () => {
    console.log("!@enhanceAccessToeken 호출!!!");
    const { accessToken } = localStorage
    if (!accessToken) return
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
}
enhanceAccessToeken();
// export default
export const store = new Vuex.Store({
    state: {
        accessToken: null,
        count: 88494
    },
    getters: {
        isAuthenticated(state) {
            state.accessToken = state.accessToken || localStorage.accessToken
            return state.accessToken
        },
        getCounter: function (state) {
            return state.count;
        }
    },
    mutations: {
        LOGIN(state, { accessToken }) {
            console.log("accessToken : " + accessToken)
            state.accessToken = accessToken
            localStorage.accessToken = accessToken
        },
    },
    actions: {
        LOGIN({ commit }, { username, password }) {
            console.log("user0 : " + username);
            console.log("usersuser : " + password);
            // console.log("usersuser : " + loginForm.password);
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
    }
})