<template>
  <Header v-if="!esVistaEspecial"></header>
  <router-view />
  <!--<div class="load d-flex justify-content-center align-items-center" style="width: 100%; height: 100vh;background: linear-gradient(180deg,rgb(83, 222, 230)15%,rgb(2, 20, 43) 100%);">
    <img src="../public/contenido/sugar-logo.png" alt="Logo girando">
  </div>-->
  <div v-if="!esVistaEspecial" class="contenedor-footer">
    <div class="filtro">
      <Pie></Pie>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Pie from './components/Pie.vue';
export default {
  name: 'App',
  components: {
    Header,
    Pie
  },
  computed: {
    esVistaEspecial() {
      return this.$route.path === '/isa' || this.$route.path === '/lab' // o la ruta que quieras usar
    }
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

html {
  scroll-behavior: smooth;
  
}
html, a, label{
  cursor: url(../public/contenido/cursor.png), auto !important;
}
button, input, path, svg,textarea{
  cursor: url(../public/contenido/pointer.png), auto !important;
}
body {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  

}
q-page{
  max-width: 100%;
  min-height: 100%;
}


* {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
}

.bg-foot {
  background-image: url('../public/contenido/nene-usando-app.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}
.filtro{
  background-color: rgba(240, 240, 240, 0.75);
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

.load img {
  animation-name: load;
  animation-duration: 3s;
  animation-iteration-count: infinite;
}

.item-show {
  view-timeline-name: --item;
  view-timeline-axis: block;

  animation-timeline: --item;
  animation-name: show;
  animation-range: entry 0% exit 5%;
  animation-fill-mode: both;
}

.item-appear {
  view-timeline-name: --item;
  view-timeline-axis: block;

  animation-timeline: --item;
  animation-name: appear;
  animation-range: entry 0% cover 60%;
  animation-fill-mode: both;
}
.text-flicker-out-glow {
	animation: text-flicker-out-glow 100ms linear both;
}
.text-flicker-in-glow {
	animation: text-flicker-in-glow 2.5s linear both;
}
/*Animaciones*/

@keyframes load {
  0% {
    transform: rotate(0);
    transform: scale3d(1);
  }

  25% {
    transform: rotate(-60deg);
  }

  100% {
    transform: rotate(720deg);
  }
}

@keyframes show {
  from {
    opacity: 0;
    transform: translateY(100vh);
    scale: 0;

  }

  to {
    opacity: 1;
    transform: translateY(0);
    scale: 1;
  }
}

@keyframes appear {
  from {
    opacity: 0;
    scale: 0;

  }

  to {
    opacity: 1;
    scale: 1;
  }
}

@keyframes disappear {
  from {
    scale: 1;

  }

  to {
    scale: 0;
  }
}

@keyframes text-flicker-in-glow {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 0;
    text-shadow: none;
  }
  10.1% {
    opacity: 1;
    text-shadow: none;
  }
  10.2% {
    opacity: 0;
    text-shadow: none;
  }
  20% {
    opacity: 0;
    text-shadow: none;
  }
  20.1% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.25);
  }
  20.6% {
    opacity: 0;
    text-shadow: none;
  }
  30% {
    opacity: 0;
    text-shadow: none;
  }
  30.1% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
  }
  30.5% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
  }
  30.6% {
    opacity: 0;
    text-shadow: none;
  }
  45% {
    opacity: 0;
    text-shadow: none;
  }
  45.1% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
  }
  50% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
  }
  55% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
  }
  55.1% {
    opacity: 0;
    text-shadow: none;
  }
  57% {
    opacity: 0;
    text-shadow: none;
  }
  57.1% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35);
  }
  60% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35);
  }
  60.1% {
    opacity: 0;
    text-shadow: none;
  }
  65% {
    opacity: 0;
    text-shadow: none;
  }
  65.1% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35), 0 0 100px rgba(255, 255, 255, 0.1);
  }
  75% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35), 0 0 100px rgba(255, 255, 255, 0.1);
  }
  75.1% {
    opacity: 0;
    text-shadow: none;
  }
  77% {
    opacity: 0;
    text-shadow: none;
  }
  77.1% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2), 0 0 100px rgba(255, 255, 255, 0.1);
  }
  85% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2), 0 0 100px rgba(255, 255, 255, 0.1);
  }
  85.1% {
    opacity: 0;
    text-shadow: none;
  }
  86% {
    opacity: 0;
    text-shadow: none;
  }
  86.1% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.45), 0 0 110px rgba(255, 255, 255, 0.25), 0 0 100px rgba(255, 255, 255, 0.1);
  }
  100% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.45), 0 0 110px rgba(255, 255, 255, 0.25), 0 0 100px rgba(255, 255, 255, 0.1);
  }
}

/*Medida queries*/

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
