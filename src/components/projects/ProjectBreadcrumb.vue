<template>
  <ol class="breadcrumb">
    <li v-for="(bread, index) in breadcrumbs"
        class="breadcrumb-item"
        :key="index"
        :class="{active: bread.active}">
      <small @click="clickBread(bread)" :class="{breaddecorate: breadActive(bread)}">{{ bread.name }}</small>
    </li>
  </ol>
</template>

<script>
  export default {
    name: "ProjectBreadcrumb",
    props: {
      'breadcrumbs': Array,
      'clickComponent': Function
    },
    methods: {
      breadActive(bread) {
        return bread.active && typeof bread.component !== 'undefined' && bread.component.length;
      },

      clickBread(bread) {
        if (this.breadActive(bread)) {
          this.clickComponent(bread.component);

          let length = this.breadcrumbs.length;
          let index = this.breadcrumbs.findIndex(x => x.component === bread.component) + 1;

          this.breadcrumbs.splice(index, length - index);
          this.breadcrumbs[this.breadcrumbs.length - 1].active = false;
        }
      }
    }
  }
</script>

<style scoped>
  .breadcrumb {
    margin-bottom: 0;
    padding: 0rem 0rem 0rem 0.8rem;
  }

  .breaddecorate {
    cursor: pointer;
    text-decoration: underline;

  }
</style>