
<template>
    <!--
            <div class="container-fluid position-fixed top-0 m-0 w-100" style="z-index: 999;">
        <header class="align-items-center d-flex py-3 border-bottom m-0 w-100">
            <a href="/" class="d-flex align-items-center  mb-0 me-auto link-body-emphasis text-decoration-none ">
                <svg class="bi" width="40" height="32">
                    <use xlink:href="#bootstrap" />
                </svg>
                <span class="fs-4">Sugar Coach</span>
            </a>
            <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
                <button class="navbar-toggler" type="button" name="button" data-bs-toggle="collapse"
                    data-bs-target="#opciones" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="opciones"><ul class="navbar-nav">
                        <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Home</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">Features</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">Pricing</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">FAQs</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">About</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    </div>
    -->
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
                    <li v-for="item in links" :key="index" class="nav-item"><a class="nav-link" :href="item.enlace">{{ item.link }}</a>
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
                    enlace: 'Premium.vue'
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