import { createStore } from "vuex";

export default createStore({
  state: {
    user: null,
  },
  mutations: {
    setUser(state, payLoad) {
      state.user = payLoad ? payLoad.user : null;
    },
  },
});
/*import { reactive } from "vue";

const state = reactive({
  user: null,
});

const methods = {
  setUser(payLoad) {
    state.user = payLoad ? payLoad.user : null;
  },
};

export default {
  state,
  methods,
};*/
