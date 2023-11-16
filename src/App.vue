<template>
  <div>
    <!-- Other components or content -->
    <FormPage />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FormPage from "./components/form.vue";

export default defineComponent({
  components: {
    FormPage,
  },
  // Other configurations for your main Vue app
});
</script>