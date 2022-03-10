<template>
  <div></div>
</template>

<script>
import { ref } from "vue";
import { supabase } from "../supabase/init";
import { useRoute } from "vue-router";
export default {
  name: "view-workout",
  setup() {
    // Create data / vars
    const data = ref(null);
    const dataLoaded = ref(null);
    const errorMsg = ref(null);
    const statusMsg = ref(null);
    const route = useRoute();

    // Get current Id of route
    const currentId = route.params.workoutId;

    // Get workout data
    const getData = async () => {
      try {
        const { data: workout, error } = await supabase
          .from("workouts")
          .select("*")
          .eq("id", currentId);
        if (error) throw error;
        data.value = workout;
        dataLoaded.value = true;
      } catch (error) {
        console.warn(error.message);
      }
    };
    // Delete workout

    // Edit mode

    // Add exercise

    // Delete exercise

    // Update Workout

    return {};
  },
};
</script>
