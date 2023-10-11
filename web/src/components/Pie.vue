<template>
  <div class="contenedor-footer w-100 h-auto">
    <div class="w-100 ">
      <footer class="py-3">
        <ul class="nav justify-content-center border-bottom border-dark-subtle pb-3 pt-3 mb-3 nav">
          <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">¿Como Funciona?</a></li>
          <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Nuestra App</a></li>
          <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Pri</a></li>
          <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">FAQs</a></li>
          <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">About</a></li>
        </ul>
        <p class="text-center text-body-secondary">&copy; 2023 Sugar Coach, Inc</p>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pie',
  data() {
    return {

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
.nav{
  background-color: rgba(1, 97, 161, 0.404);
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