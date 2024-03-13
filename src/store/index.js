import { createStore } from 'vuex'

export default createStore({
  state: {
    locale: "EN",
  },
  getters: {
    
  },
  mutations: {
    setLocale: (state, value) => state.locale = value,
  },
  actions: {
    getLocale: (context, value) => {
      context.commit('setLocale', value);
    }
  },
  modules: {
  }
})
