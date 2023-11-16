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

export default defineComponent({
  data() {
    return {
      formData: {
        address: ""
      },
    };
  },
  methods: {
    submitForm() {
      // Handle form submission here (e.g., send data to a server)
      console.log("Form submitted:", this.formData);
      // You can perform any actions here, like sending data to a server using Axios or Fetch API.
    },
  },
});
</script>
