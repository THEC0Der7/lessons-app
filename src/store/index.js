import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
    search: '',
    filters: null,
  },
  getters: {
    getCart: (state) => state.cart,
    getSearch: (state) => state.search,
    getFilters: (state) => state.filters,
  },
  mutations: {
    setCart: (state, payload) => (state.cart = payload),
    setSearch: (state, payload) => (state.search = payload),
    setFilters: (state, payload) => (state.filters = payload),
  },
  actions: {},
  modules: {},
});
