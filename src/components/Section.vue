<template>
  <section>
    <div class="jumbotron">
      <router-view/>
    </div>
  </section>
</template>

<script>
  export default {
    name: "Section"
  }
</script>

<style scoped>
  .jumbotron {
    margin-bottom: 0;
  }
</style>