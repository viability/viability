<template>
  <li>
    <div :class="{bold: isFolder}" @click="toggle(model.component)" @dblclick="changeType">
      {{ model.name }}
      <span v-if="isFolder">[{{ open ? '-' : '+' }}]</span>
    </div>
    <ul v-show="open" v-if="isFolder">
      <TreeView class="item"
                v-for="(model, index) in model.children"
                :key="index"
                :isView="isView"
                :model="model"/>
      <li v-if="model.plus" class="add" @click="addChild">+</li>
    </ul>
  </li>
</template>

<script>
  export default {
    name: "TreeView",
    props: {
      model: Object,
      isView: Function
    },
    data() {
      return {
        open: false
      }
    },
    computed: {
      isFolder: function () {
        return this.model.children && this.model.children.length
      }
    },
    methods: {
      toggle: function (component) {
        if (this.isFolder) {
          this.open = !this.open;
        }

        if (typeof component !== 'undefined') {
          this.isView(component);
        }
      },
      changeType: function () {
        if (!this.isFolder) {
          // Vue.set(this.model, 'children', []);
          this.addChild();
          this.open = true
        }
      },
      addChild: function () {
        this.model.children.push({
          name: 'new stuff'
        })
      }
    }
  }
</script>

<style scoped>
  .bold {
    font-weight: bold;
  }
  ul {
    padding-left: 2em;
  }
</style>