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
        const { data: workout, error } = await supabase
          .from("workouts")
          .select("*");
        if (error) throw error;
        data.value = workout;
        dataLoaded.value = true;
        console.log(data.value);
      } catch (error) {
        console.warn(error.message);
      }
    };
    // Run data function

    return {};
  },
};
</script>
