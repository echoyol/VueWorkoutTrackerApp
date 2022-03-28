//import { reactive } from "vue";
import { createStore } from "vuex";
const store = createStore({
  state: {
    user: null,
  },
  mutations: {
    setUser(payload) {
      state.user = payload ? payload.user : null;
    },
  },
});
/*const state = reactive({
  ,
});

const methods = {
  setUser(payload) {
    state.user = payload ? payload.user : null;
  },
};
export default {
  state,
  methods,
};*/
