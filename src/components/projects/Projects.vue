<template>
  <article>
    <h1 class="display-5">Viabilidad económica de proyectos de inversión</h1>
    <hr class="my-2">
    <p>No se ha encontrado ningún proyecto</p>

    <router-link tag="p" class="lead" to="/projects/new">
      <a class="btn btn-primary btn-lg" role="button">Nuevo Proyecto</a>
    </router-link>
  </article>
</template>

<script>
  export default {
    name: "Projects"
  }
</script>

<style scoped>

</style>