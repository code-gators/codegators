import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    resume: {
      progress: 0
    }
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    SET_RESUME_BASIC_INFO(state, payload) {
      state.resume.basic_info = payload;
    },
    SET_PROGRESS(state, payload) {
      state.resume.progress = payload;
    }
  },
  actions: {
    setUser({ commit }, payload) {
      commit("SET_USER", payload);
    },
    setProgress({ commit }, payload) {
      commit("SET_PROGRESS", payload);
    },
    setResumeBasicInfo({ commit }, payload) {
      commit("SET_RESUME_BASIC_INFO", payload);
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
    },
    getEmail(state) {
      if (state.user.email) {
        return state.user.email;
      } else {
        return false;
      }
    },
    getProgress(state) {
      return state.resume.progress;
    },
    getHeaders(state) {
      return state.user.headers;
    }
  }
});
