<template>
  <li>
    <div :class="{bold: isFolder}" @click="thisView(model.component)" @dblclick="changeType">
      <span @click="toggle" v-if="isFolder">[{{ open ? '-' : '+' }}]</span>
      {{ model.name }}
    </div>
    <ul v-show="open" v-if="isFolder">
      <TreeView class="item"
                v-for="(model, index) in model.children"
                :key="index"
                :isView="isView"
                :tree="tree"
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
      tree: Object,
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
      toggle: function () {
        if (this.isFolder) {
          this.open = !this.open;
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
      },

      loopForBread(tree, key, bread) {
        let child = tree.children;
        let active = (typeof key !== 'undefined' && tree.key !== key && child && child.length);

        bread.push({ name: tree.name, component: tree.component, active: active });

        if (active) {
          Object.keys(child).forEach(k => {
            if (child[k].key === key.substr(0, child[k].key.length)) {
              this.loopForBread(child[k], key, bread);
            }
          })
        }
      },

      thisView(component) {
        if (typeof component !== 'undefined') {
          let breadcrumbs = [];

          this.loopForBread(this.tree, this.model.key, breadcrumbs);

          this.isView(component, breadcrumbs);
        }
      }
    }
  }
</script>

<style scoped>
  .bold {
    font-weight: bold;
  }
  ul {
    padding-left: 1.5em;
    list-style: none;
  }
</style>