// src/store/index.js
import { createStore } from 'vuex';

export default createStore({
      state() {
            return {
                  dattourData: null,
                  tthkData: null,
            };
      },
      mutations: {
            setDattourData(state, data) {
                  state.dattourData = data;
            },
            setTthkData(state, data) {
                  state.tthkData = data;
            },
      },
      actions: {
            // Các actions nếu cần
      },
      getters: {
            getDattourData(state) {
                  return state.dattourData;
            },
            getTthkData(state) {
                  return state.tthkData;
            },
      },
});
