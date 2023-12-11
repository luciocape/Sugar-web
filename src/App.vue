<template>
  <Header></header>
  <router-view />
  <div class="load d-flex justify-content-center align-items-center" style="width: 100%; height: 100vh;background: linear-gradient(180deg,rgb(83, 222, 230)15%,rgb(2, 20, 43) 100%);">
    <img src="../public/contenido/sugar-logo.png" alt="Logo girando">
  </div>
  <div class="contenedor-footer">
    <Pie></Pie>
  </div>
</template>

<script>
import router from './Router';
import Header from './components/Header.vue';
import Pie from './components/Pie.vue';
export default {
  name: 'App',
  components: {
    Header,
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

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  cursor: url("../public/contenido/cursor-fondo.png");

}


* {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
}

.bg-foot {
  background-image: url('https://sugar.coach/wp-content/uploads/2021/11/contacto-1.jpg;');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
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
