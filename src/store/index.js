import { createStore } from "vuex";

export default createStore({
  state: {
    locale: "EN",
    theme: "light",
  },
  getters: {
    theme: (state) => {
      return state.theme;
    },
  },
  mutations: {
    saveTheme: (state, theme) => {
      state.theme = theme;
    },
    setLocale: (state, value) => (state.locale = value),
  },
  actions: {
    getLocale: (context, value) => {
      context.commit("setLocale", value);
    },
    saveTheme({ commit }, theme) {
      commit("saveTheme", theme);
    },
  },
  modules: {},
});
