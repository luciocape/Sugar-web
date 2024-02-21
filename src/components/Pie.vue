<template>
  <div style="background: linear-gradient(180deg, rgba(34,53,77,0) 15%, #39B6BB 100%); width: 100%; height: 250px;"></div>
  <div class="estrellas">
    <div class="container">
      <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-3">
        <div class="col">
          <router-link to="/" aria-label="Ir al inicio"
            class=" m-auto mb-1 w-100 d-flex align-items-center link-body-emphasis text-decoration-none">
            <img class="m-auto mb-0" width="100" loading="lazy" src="../../public/contenido/sugar-logo.png" alt="Logo SugarCoach">
          </router-link>
          <p class="text-body-secondary h4 ">&copy; Sugar Coach, Inc 2023</p>
        </div>
        <div class="col">
          <h2>Navegación inicio</h2>
          <nav>
            <ul class="nav flex-column">
              <li v-for="item in links" :key="index" class="nav-item mb-2">
                <a class="nav-link p-0" :href="item.enlace" style="color:antiquewhite;">{{ item.link }}</a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="col">
          <h2>Navegación vistas</h2>
          <nav>
            <ul class="nav flex-column">
              <li v-for="item in views" :key="index" class="nav-item mb-2">
                <router-link :to="item.enlace" class="nav-link p-0" style="color:antiquewhite;">{{ item.link
                }}</router-link>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>

  </div>
  <!--
    <div class="contenedor-footer w-100 h-auto pb-5">
    <div class="w-100 ">
      <footer class="py-3">
        <ul class="nav justify-content-center border-bottom border-dark-subtle pb-3 pt-3 mb-3 nav">
          <li v-for="item in links" :key="index" class="nav-item"><a v-if="item.link != 'Premium'"
              class="nav-link px-2 fw-bolder" :href="item.enlace">{{ item.link }}</a>
            <router-link v-else :to="item.enlace" class="nav-link px-2 fw-bolder ">{{ item.link }}</router-link>
          </li>
        </ul>
        <p class="text-center text-body-secondary lead">&copy; 2023 Sugar Coach, Inc</p>
      </footer>
    </div>
  </div>
-->
</template>
<script>
export default {
  name: 'Pie',
  data() {
    return {
      links: [
        {
          link: '¿Como Funciona?',
          icon: 'fas fa-cogs',
          enlace: '../#como_funciona'
        },
        {
          link: 'Testimonios',
          icon: 'fas fa-info-circle',
          enlace: '../#testimonios'
        },
        {
          link: 'Nuestra App ',
          icon: 'fas fa-dollar-sign',
          enlace: '../#nuestra_app'
        },
        {
          link: 'Equipo',
          icon: 'fas fa-question-circle',
          enlace: '../#equipo'
        },
        {
          link: 'Contacto',
          icon: '',
          enlace: '../#nuestras_novedades'
        },
      ],
      views: [
        {
          link: 'Inicio',
          icon: 'fas fa-info-circle',
          enlace: '/'
        },
        {
          link: 'Premium',
          icon: 'fas fa-info-circle',
          enlace: '/premium'
        },

        {
          link: 'Para Empresas',
          icon: 'fas fa-info-circle',
          enlace: '/para-empresas'
        },
        {
          link: 'Becado',
          icon: 'fas fa-info-circle',
          enlace: '/becado'
        },
        {
          link: 'Premios',
          icon: 'fas fa-info-circle',
          enlace: '/premios'
        },
      ]
    }
  }
}
</script>

<style>
.redes {
  justify-content: end;
}

.contenedor-footer {
  background-image: url('../../public/contenido/nene-usando-app.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  max-width: 100%;
}

.estrellas {
  position: relative;
  width: 100%;
  height: auto;
  min-height: 100%;
  background-image: url('../../public/contenido/space_bg_footer_edit.png');
  background-position: initial;
  background-size: cover;
  background-repeat: no-repeat;
}

footer {
  position: relative;
  padding: 80px 0 100px 0;
}

footer .nav-link {
  color: #423C5D;
  transition: 200ms;
}

footer h2 {
  font-size: 22px;
  margin-top: 0;
  font-weight: 900;
  margin-bottom: 15px;
  color: rgb(13, 4, 53);
}

footer .nav-link:hover {
  color: #2f2c3f;
}

@media only screen and (max-width: 435px) {
  .footer {
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  .redes {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
}
</style>