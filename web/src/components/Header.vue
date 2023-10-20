
<template>
    <nav class="navbar navbar-expand-sm top-0 position-fixed w-100" style="z-index: 999; background-color: #4B23A5;">
        <div class="container-fluid">
            <a class="navbar-brand" href="index.html">
                <img src="../../public/contenido/sugar-logo.png" class="d-inline-block " alt="Logo Sugar Coach" width="60" >
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="menu"><img src="../../public/contenido/menu.png" alt="menu" width="45" style="filter: invert(85%);"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="d-flex justify-content-end align-items-start navbar-nav mb-2 mb-lg-0">
                    <!--Links navbar-->
                    <li v-for="item in links" :key="index" class="nav-item"><a v-if="item.link != 'Premium'" class="nav-link" :href="item.enlace">{{ item.link }}</a>
                        <router-link v-else :to="item.enlace" class="nav-link">{{ item.link }}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            links: [
                {
                    link: '¿Como Funciona?',
                    icon: 'fas fa-cogs',
                    enlace: '#como_funciona'
                },
                
                {
                    link: 'Nuestra App ',
                    icon: 'fas fa-dollar-sign',
                    enlace: '#nuestra_app'
                },
                {
                    link: 'Equipo',
                    icon: 'fas fa-question-circle',
                    enlace: '#equipo'
                },
                {
                    link: 'Contacto',
                    icon: '',
                    enlace: '#contactanos'
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

    .nav-item a {
        font-size: 1.1rem;
        color: rgb(235, 228, 221);
        transition: 0.5s;
    }

    @media only screen and (max-width: 375px) {
        .navbar-brand img{
            width: 45px;
        }
        .menu img{
            width: 30px;
        }
    }

</style>