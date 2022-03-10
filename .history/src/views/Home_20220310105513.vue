<template>
  <div v-if="dataLoaded" class="container mt-10 px-4">
    <!--No Data-->
    <div v-if="data.length === 0" class="w-full flex flex-col items-center">
      <h1 class="text-2xl">Looks empty here...</h1>
      <router-link
        class="mt-6 py-2 px-6 rounded-sm self-start
      text-sm text-white bg-at-light-green duration-200
      border-solid border-2 border-transparent hover:border-at-light-green hover:bg-white
      hover:text-at-light-green"
        :to="{ name: 'create' }"
        >Create Workout</router-link
      >
    </div>

    <!--Data-->
    <div
      v-else
      class="grid drid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      <router-link
        class="flex flex-col items-center bg-light-grey p-8 shadow-md cursor-pointer"
        :to="{ name: '' }"
        v-for="(workout, index) in data"
        :key="index"
      >
        <!--Cardio Img-->
        <img src="" alt="" />
      </router-link>
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

    return { data, dataLoaded };
  },
};
</script>
