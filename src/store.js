import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {}
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    }
  },
  actions: {
    setUser({ commit }, payload) {
      commit("SET_USER", payload);
    }
  },
  getters: {
    getUser(state) {
      if (state.user.user_metadata) {
        return state.user.user_metadata.full_name.split(" ")[0];
      } else {
        return false;
      }
    },
    getJwt(state) {
      if (state.user.user_metadata) {
        return state.user.token;
      } else {
        return false;
      }
    }
  }
});
