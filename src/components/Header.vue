<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <router-link tag="a" class="navbar-brand" to="/">
        <article v-decorate-title="title"></article>
      </router-link>

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
export default {
  name: 'Header',
  data() {
    return {
      title: 'Vi@bility'
    }
  },
  // created() {
  //   let to = this.$route.path;
  //   // eslint-disable-next-line
  //   console.log("Ruta: " + to);
  // },
  directives: {
    'decorate-title': {
      // eslint-disable-next-line
      bind(el, binding, vnode) {
        let via = binding.value.substring(0, binding.value.indexOf("@") + 1);
        let bility = binding.value.substr(binding.value.indexOf("@") + 1);

        let spanVia = document.createElement('span');
        let textContent = document.createTextNode(via);
        spanVia.appendChild(textContent);

        let spanBility = document.createElement('span');
        textContent = document.createTextNode(bility);
        spanBility.appendChild(textContent);
        spanBility.style.fontWeight = 'bold';
        spanBility.style.fontStyle = 'italic';

        el.appendChild(spanVia).appendChild(spanBility);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  article {
    font-size: 20px;
  }
</style>
