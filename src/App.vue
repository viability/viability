<template>
  <div class="main-domain">
    <div id="app-left"></div>
    <div id="app" class="container">
      <Header/>
      <Section/>
      <Footer/>
    </div>
    <div id="app-right"></div>
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

<style>
  .main-domain {
    display: flex;
  }
  #app-left, #app-right {
    z-index: 1;
    width: calc((100% - 992px)/3);
    background-color: #fff;
  }

  #app {
    padding-right: 0;
    padding-left: 0;
  }

  @media (min-width: 576px) {
    #app-left, #app-right {
      width: calc((100% - 540px)/2)
    }
  }

  @media (min-width: 768px) {
    #app-left, #app-right {
      width: calc((100% - 720px)/2)
    }
  }

  @media (min-width: 992px) {
    #app-left, #app-right {
      width: calc((100% - 960px)/2)
    }
  }

  @media (min-width: 1200px) {
    #app-left, #app-right {
      width: calc((100% - 1140px)/2)
    }
  }
</style>

<style src="../node_modules/bootswatch/dist/cosmo/bootstrap.min.css"></style>

<style src="../node_modules/@mdi/font/css/materialdesignicons.min.css"></style>
