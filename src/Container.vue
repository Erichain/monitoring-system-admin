<template>
  <h1>
    This is Container
  </h1>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    props: ['name', 'initialEnthusiasm'],

    data() {
      return {
        enthusiasm: this.initialEnthusiasm,
      }
    },
  });
</script>

<style></style>
