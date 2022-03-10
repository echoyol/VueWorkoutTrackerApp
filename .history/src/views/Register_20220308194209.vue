<template>
  <div class="max-w-screen-sm mx-auto px-4 py-10">
    <!--Error Handling-->
    <div v-if="errorMsg" class="mb-10 p-4 rounded-md bg-light-grey shadow-lg">
      <p class="text-red-500">{{ errorMsg }}</p>
    </div>

    <!--Register-->
    <form class="p-8 flex flex-col bg-light-grey rounded-md shadow-lg">
      <h1 class="text-3xl text-at-light-green mb-4">Register</h1>

      <div class="flex flex-col mb-2">
        <label for="email" class="mb-1 "></label>
      </div>
    </form>
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
