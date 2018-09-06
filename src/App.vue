<template>
  <div id="app" class="container">
    <Header/>
    <Section/>
    <Footer/>
  </div>
</template>

<script>
  import Header from './components/Header'
  import Section from './components/Section'
  import Footer from './components/Footer'

  export default {
    name: 'app',
    components: {
      Header, Section, Footer
    }
  }
</script>

<style src="../node_modules/bootswatch/dist/slate/bootstrap.min.css">

</style>
