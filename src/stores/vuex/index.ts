import { createStore } from "vuex";

import moduleA from "./modules/moduleA";
import moduleB from "./modules/moduleB";

// 创建一个新的 store 实例
const store = createStore({
  state() {
    return {
      count: 1,
    };
  },
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  mutations: {
    increment(state, payload) {
      // setTimeout(() => {
      state.count += payload.amount;
      // }, 1000);
    },
  },
  actions: {
    increment(context, payload) {
      // context.commit("increment");
      setTimeout(() => {
        context.commit("increment", payload.amount);
      }, 1000);
    },
  },
  modules: {
    a: moduleA,
    b: moduleB,
  },
});

export default store;
