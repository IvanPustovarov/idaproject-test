import { createStore } from 'vuex'

export default createStore({
  state: {
    products: null
  },
  getters: {
  },
  mutations: {
    addItem(state, payload) {
      state.products.push(payload);
      const storage = JSON.parse(localStorage.products);
      storage.push(payload);
      localStorage.products = JSON.stringify(storage);
    },
    setItems( state, payload) {
      state.products = payload;
    },
    deleteItem(state, payload){
      const index = state.products.findIndex((item)=> item.id === payload);
      state.products.splice(index, 1);
      const storage = JSON.parse(localStorage.products);
      storage.splice(index, 1);
      localStorage.products = JSON.stringify(storage);
    }
  },
  actions: {
  },
  modules: {
  }
})
