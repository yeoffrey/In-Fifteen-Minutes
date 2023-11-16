<template>
  <div>
    <h1>Please enter your address</h1>
    <form @submit.prevent="submitForm">
      <div>
        <input type="text" id="address" v-model="formData.address" />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { places } from "../api/google";

export default defineComponent({
  data() {
    return {
      formData: {
        address: "",
      },
    };
  },
  methods: {
    async submitForm() {
      const search = this.formData.address;

      await places(search);
    },
  },
});
</script>
