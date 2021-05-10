import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: false,
  },
  mutations: {
    SideMenu(state) {
      state.drawer = !state.drawer;
    },
  },
  actions: {
    SideMenu({ commit }) {
      commit("SideMenu");
    },
  },
});
