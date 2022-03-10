<template>
  <div class="max-w-screen-sm mx-auto px-4 py-10">
    <!--Error Handling-->
    <div v-if="errorMsg" class="mb-10 p-4 rounded-md bg-light-grey">
      <p class="text-red-500">{{ errorMsg }}</p>
    </div>

    <!--Error Handling-->
    <form action=""></form>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "register",
  setup() {
    // Create data / vars
    const email = ref(null);
    const password = ref(null);
    const confirmPassword = ref(null);
    const errorMsg = ref(null);
    // Register function

    return {
      email,
      password,
      confirmPassword,
      errorMsg,
    };
  },
};
</script>
