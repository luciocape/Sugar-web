<template>
  <Header></header>
  <router-view />
  <div class="bg-foot">
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
  animation-range: entry 0% cover 65%;
  animation-fill-mode: both;
}

/*Animaciones*/
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
}
</style>
