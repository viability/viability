<template>
  <v-select :id="id" :placeholder="placeholder" :options="options">
    <template slot="option" slot-scope="option">
      <p>
        <i class="mdi mdi-18px" v-if="option.icon" :class="option.icon"></i>
        {{ option.label }}
        <small v-if="option.subtext" class="text-muted">{{ option.subtext }}</small>
      </p>
    </template>
  </v-select>
</template>

<script>
  export default {
    name: "ProSelect",
    props: {
      id: String,
      options: Object,
      placeholder: String
    }
  }
</script>

<style scoped>
  p {
    margin: 0.1rem 0rem 0.1rem 0rem;
  }
</style>