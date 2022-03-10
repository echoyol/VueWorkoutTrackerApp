import { reactive } from "vue";

const state = reactive({
  user: null,
});

const methods = {
  setUser(playload) {
    state.user = payload ? payload.user : null;
  },
};
export default {
  state,
  methods,
};
