//import { reactive } from "vue";
import { createStore } from "vuex";
const store = createStore({});
const state = reactive({
  user: null,
});

const methods = {
  setUser(payload) {
    state.user = payload ? payload.user : null;
  },
};
export default {
  state,
  methods,
};
