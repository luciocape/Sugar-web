<template>
  <Header></Header>
  <Hero></Hero>
  <Descargar></Descargar>
  <main class="bg-body-secondary">
    <Como_funciona></Como_funciona>
    <Testimonios></Testimonios>
    <Nuestra_app></Nuestra_app>
    <Equipo></Equipo>
    <Nuestras_novedades></Nuestras_novedades>
    <Formulario></Formulario>
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
import Testimonios from './components/home/Testimonios.vue';
import Descargar from './components/Descargar.vue';
import Formulario from './components/home/Formulario.vue';
import Nuestras_novedades from './components/home/Nuestras_novedades.vue';

export default {
  name: 'App',
  components: {
    Header,
    Hero,
    Descargar,
    Formulario,
    Como_funciona,
    Testimonios,
    Nuestra_app,
    Equipo,
    Nuestras_novedades,
    Pie

  },
  mounted() {
    document.title = 'Sugar Coach';
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lora:wght@100;300;400;500;600;700;800;900&display=swap');

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

h2 {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', 'Arial', 'sans-serif';
  font-weight: 550;
}

.h1 {
  font-family: 'Roboto', 'Lucida Sans Unicode', 'Lucida Grande';
}

.texto {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 2vw;
  line-height: 1.5;
  text-align: justify;
}

@media only screen and (min-width: 800px) {
  .texto {
    font-size: 1.6vw;
  }
}

@media only screen and (max-width: 600px) {
  .texto {

    font-size: 3vw;
  }

}

@media only screen and (max-width: 450px) {
  .texto {
    font-size: 3.8vw;
  }
}</style>
