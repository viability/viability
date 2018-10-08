<template>
    <footer>
        <div class="card bg-light mb-3">
            <div class="card-header"><article v-decorate-title="title"></article></div>
        </div>
    </footer>
</template>

<script>
  import { headerText } from "../languages";

  export default {
    name: "Footer",
    data() {
      return {
        title: headerText.title
      }
    }
  }
</script>

<style scoped>
    div {
        text-align: center;
    }
</style>