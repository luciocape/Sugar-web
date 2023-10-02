<template>
    <Header></Header>
    <Hero></Hero>
    <main>
      <Como_funciona></Como_funciona>
    </main>
    
</template>

<script>
import Header from './components/Header.vue';
import Hero from './components/home/Hero.vue';
import Como_funciona from './components/home/Como_funciona.vue';

export default {
  name: 'App',
  components: {
    Header,
    Hero,
    Como_funciona
  },
  mounted() {
    document.title = 'Sugar Coach';
  }
}
</script>

<style>
  #app {
    min-height: 100vh;
    max-width: 100vw;

    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
