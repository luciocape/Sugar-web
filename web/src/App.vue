<template>
  <Header></Header>
  <Hero></Hero>
  <main>
    <Como_funciona></Como_funciona>
    <Nuestra_app></Nuestra_app>
    <Equipo></Equipo>
  </main>
  <Pie></Pie>
</template>

<script>
import Header from './components/Header.vue';
import Hero from './components/home/Hero.vue';
import Como_funciona from './components/home/Como_funciona.vue';
import Nuestra_app from './components/home/Nuestra_app.vue';
import Equipo from './components/home/Equipo.vue';
import Pie from './components/Pie.vue';

export default {
  name: 'App',
  components: {
    Header,
    Hero,
    Como_funciona,
    Nuestra_app,
    Equipo,
    Pie,
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
}

body {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
}

* {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
}
h2{
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', 'Arial', 'sans-serif';
  font-weight: 550;
}
</style>
