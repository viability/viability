<template>
  <ul>
    <TreeView class="item" :model="treeData" :tree="treeData" :isView="isView"/>
  </ul>
</template>

<script>
  import TreeView from './TreeView'
  import { tree } from "../../routes";

  export default {
    name: "ProjectTreeView",
    props: ['clickView'],
    data() {
      return {
        treeData: tree
      }
    },
    methods: {
      isView(component, breadcrumb) {
        this.clickView(component, breadcrumb);
      }
    },
    components: {
      TreeView
    }
  }
</script>

<style scoped>
  .item {
    cursor: pointer;
  }

  ul {
    padding-left: 0.5em;
    line-height: 2em;
    list-style: none;
  }
</style>