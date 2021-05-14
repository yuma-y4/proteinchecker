import Vue from "vue";
import Vuex from "vuex";
import firebase from 'firebase'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: false,
    login_user: true,

  },
  mutations: {
    SideMenu(state) {
      state.drawer = !state.drawer;
    },
    setLoginUser (state, user) {
      state.login_user = user
    },
   
    deleteLoginUser (state) {
      state.login_user = false
    },
  },
  actions: {
    SideMenu({ commit }) {
      commit("SideMenu");
    },
    setLoginUser ({ commit }, user) {
      commit('setLoginUser', user)
    },
    logout () {
      firebase.auth().signOut()
    },
    deleteLoginUser ({ commit }) {
      commit('deleteLoginUser')
    },
  },
});
