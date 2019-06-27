<template>
  <v-select :inputId="id" :placeholder="placeholder" :options="options" v-model="vModel" @change="handle">
    <template slot="option" slot-scope="option">
      <p :title="option.tooltip">
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
      options: Array,
      placeholder: String,
      hidden: Object,

    },
    model: {
      prop: 'hidden',
      event: 'change'
    },
    data() {
      return {
        vModel: this.hidden
      }
    },
    methods: {
      handle() {
        this.$emit('change', this.vModel)
      }
    }
  }
</script>

<style scoped>
  p {
    margin: 0.1rem 0rem 0.1rem 0rem;
  }
</style>