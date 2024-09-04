<template>
  <div
    class="item-desplazar d-none d-sm-block position-fixed h-auto bg-body-secondary opacity-100 d-flex justify-content-center align-items-center item-deslizar"
    style="
      min-width: 180px;
      width: 30%;
      right: 50px;
      bottom: 10vh;
      z-index: 999;
      border-radius: 20px;
    "
  >
    <a
      href="https://play.google.com/store/apps/details?id=com.sugarcoachpremium&hl=es_AR&gl=US"
      class="d-flex justify-content-center align-items-center w-100 h-100"
      ><img
        src="../../../public/contenido/boton-descargar.webp"
        alt="Boton de descarga"
        class="w-100 h-100"
    /></a>
  </div>
  <div
    class="d-flex justify-content-center align-items-center position-fixed h-auto bottom-0 d-sm-none"
    style="z-index: 900; max-width: 100vw"
  >
    <a
      href="https://play.google.com/store/apps/details?id=com.sugarcoachpremium&hl=es_AR&gl=US"
      class="w-50 h-100"
      ><img
        src="../../../public/contenido/boton-descargar.webp"
        alt="Boton de descarga"
        class="w-100 h-100"
    /></a>
  </div>
</template>

<script>
export default {
  name: "Descargar",
};
</script>

<style>
.item-desplazar {
  view-timeline-name: --item;
  view-timeline-axis: block;

  animation-timeline: --item;
  animation-name: desplazar;
  animation-range: entry 100% cover 710%;
  animation-fill-mode: both;
}

@keyframes desplazar {
  0% {
    transform: translate(0);
    scale: 1;
  }
  10% {
    transform: translate(0);
    scale: 1;
  }
  20% {
    transform: translate(0);
    scale: 1;
  }
  30% {
    transform: translate(0);
    scale: 1;
  }
  40% {
    transform: translate(0);
    scale: 1;
  }
  50% {
    transform: translate(0);
    scale: 1;
  }
  60% {
    transform: translate(0);
    scale: 1;
  }
  70% {
    transform: translate(0);
    scale: 1;
  }
  80% {
    transform: translate(0);
    scale: 1;
  }
  85%{
    transform: translate(0);
    scale: 1;
  }

  100% {
    transform: translate(-38vw, 15vh);
    scale: 0.8;
  }
}
</style>
