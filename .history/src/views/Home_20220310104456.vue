<template>
  <div v-if="dataLoaded" class="container mt-10 px-4">
    <!--No Data-->
    <div v-if="data.length === 0" class="w-full flex flex-col items-center">
      <h1 class="text-2xl">Looks empty here...</h1>
      <router-link :to="{ name: 'create' }">Create Workout</router-link>
    </div>
  </div>
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
      } catch (error) {
        console.warn(error.message);
      }
    };
    // Run data function
    getData;

    return { dtat, dataLoaded };
  },
};
</script>
