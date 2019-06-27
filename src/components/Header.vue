<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <router-link tag="a" class="navbar-brand" to="/">
        <article v-decorate-title="title"></article>
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav mr-auto">
          <router-link tag="li" class="nav-item" active-class="active" to="/projects" exact>
            <a class="nav-link">Proyectos</a>
          </router-link>
          <router-link tag="li" class="nav-item" active-class="active" to="/analysis" exact>
            <a class="nav-link">Análisis</a>
          </router-link>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
  import { headerText } from "../languages";

  export default {
  name: 'Header',
  data() {
    return {
      title: headerText.title
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  article {
    font-size: 20px;
  }
</style>
