<template>
  <div class="contenedor-footer w-100 h-auto pb-5">
    <div class="w-100 ">
      <footer class="py-3">
        <ul class="nav justify-content-center border-bottom border-dark-subtle pb-3 pt-3 mb-3 nav">
          <li v-for="item in links" :key="index" class="nav-item"><a v-if="item.link != 'Premium'"
              class="nav-link px-2 text-body-secondary fw-bolder" :href="item.enlace">{{ item.link }}</a>
            <router-link v-else :to="item.enlace" class="nav-link px-2 text-body-secondary fw-bolder">{{ item.link }}</router-link>
          </li>
        </ul>
        <p class="text-center text-body-secondary lead">&copy; 2023 Sugar Coach, Inc</p>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pie',
  data() {
    return {
      links: [
        {
          link: 'Inicio',
          enlace: '/'
        },
        {
          link: '¿Como Funciona?',
          icon: 'fas fa-cogs',
          enlace: '../#como_funciona'
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
          enlace: '../#contactanos'
        },
        {
          link: 'Premium',
          icon: 'fas fa-info-circle',
          enlace: '/premium'
        }
      ]
    }
  }
}
</script>

<style>
.contenedor-footer {
  background-image: url('https://sugar.coach/wp-content/uploads/2021/11/contacto-1.jpg;');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.nav {
  background-color: rgba(76, 0, 255, 0.451);
}


.redes {
  justify-content: end;
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