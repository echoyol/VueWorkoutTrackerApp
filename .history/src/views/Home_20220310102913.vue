<template>
  <div></div>
</template>

<script>
import { ref } from "vue";
import { supabase } from "../supabase/init";
export default {
  name: "Home",
  components: {},
  setup() {
    // Create data / vars
    const data = ref([]);
    const dataLoaded = ref(null);

    // Get data
    const getData = async () => {
      try {
      } catch (error) {
        console.warn(error.message);
      }
    };
    // Run data function

    return {};
  },
};
</script>
