<template>
  <div class="container d-absolute bottom-0">
    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <div class="d-flex align-items-center justify-content-center copyrigth">
        <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary d-flex justify-content-center align-items-center text-decoration-none lh-1">
          <img src="../../public/contenido/sugar-logo.png" alt="Logo" width="35">
        </a>
        <span class="m-0 text-body-secondary ">&copy; 2023 Sugar Coach</span>
      </div>

      <ul class="nav list-unstyled d-flex flex-row redes">
        <li v-for="(item, index) in  redes" :key="index" class="ms-3"><a class="text-body-secondary"
            :href="item.enlace"><img class="bi" width="35" height="35" :src="item.url" :alt="item.alt"></a></li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Pie',
  data() {
    return {
      redes: [
        {
          enlace: 'https://www.instagram.com/sugar.coach/',
          url: 'https://sugar.coach/wp-content/uploads/2021/07/instagram-icon-150x150.png',
          alt: 'Instagram'
        },
        {
          enlace: 'https://www.facebook.com/sugarcoach/',
          url: 'https://sugar.coach/wp-content/uploads/2021/07/facebook-icon-150x150.png',
          alt: 'Facebook'
        },
        {
          enlace: 'https://twitter.com/sugarcoach',
          url: 'https://sugar.coach/wp-content/uploads/2021/07/twitter-icon.png',
          alt: 'Twitter'
        },
        {
          enlace: 'https://www.youtube.com/user/SugarCoach',
          url: 'https://sugar.coach/wp-content/uploads/2021/07/youtube-icon.png',
          alt: 'Youtube'
        },
        {
          enlace: 'https://www.tiktok.com/sugarcoach/',
          url: 'https://sugar.coach/wp-content/uploads/2021/11/tiktok.png',
          alt: 'Tiktok'
        },
      ]
    }
  }
}
</script>

<style>
.footer {
  background-color: #343a40;
  color: #fff;
}

.redes{
  justify-content: end;
}

@media only screen and (max-width: 435px) {
  .footer{
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  .redes{
    width: 100%;
    justify-content: center;
    align-items: center;
  }
}
</style>