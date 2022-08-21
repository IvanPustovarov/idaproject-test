import { createStore } from 'vuex'

export default createStore({
  state: {
    products: []
  },
  getters: {
  },
  mutations: {
    addItem(state, payload) {
      state.products.push(payload);
    },
    deleteItem(state, payload){
      const index = state.products.findIndex((item)=> item.id === payload);
      state.products.splice(index, 1);
    }
  },
  actions: {
  },
  modules: {
  }
})
