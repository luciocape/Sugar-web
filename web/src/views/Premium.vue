<template>
    <q-page id="premium" class="d-flex flex-column justify-content-center align-items-center">
        <div :class="{ 'hidden': !mostrarContenido }" class="position-fixed p-3 premium-presentacion">
            <h1 class="display-1 mb-1">Premium</h1>
            <h2 class="h2">Elige el plan perfecto para ti</h2>
            <p class="text-center">Este proyecto se sustenta solo con el trabajo y el esfuerzo de los miembros del
                equipo. Todos
                relacionados de alguna manera con la diabetes,
                Para seguir desarrollando este proyecto y mejorar las funcionalidades y solucionar los problemas
                que todos tenemos, necesitamos el aporte de todos.
                Por eso puedes obtener tu licencia Premium totalmente gratis, para que todos tengan acceso y si
                quieres también puedes aportar y volverte Mecenas o Patreon de SugarCoach</p>
        </div>
        <div :class="{ 'hidden': scrolledDown }" class="position-fixed p-3 w-100 premium-presentacion"
            style="height: 10vh; z-index: 600;">
            <span @click="toggleContenido" class="flecha"><img src="" alt="">
                <svg xmlns="http://www.w3.org/2000/svg" style="height: 6vh;" fill="currentColor"
                    class="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                    <path
                        d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0" />
                </svg>
            </span>
        </div>
        <main>
            <div class="d-flex justify-content-evenly w-100 flex-wrap gap-3" style="margin-top: 30vh;">
                <img v-for="(item, index) in  celus" class="align-items-center  " style="width: 15vw; min-width: 200px;"
                    :src="item.url" :alt="item.al">
            </div>
            <div class="m-4">
                <section>
                    <div class="row  gap-3 mb-5 text-center">
                        <div v-for="(item, index) in  cards " :key="index" class="col p-0">
                            <div class="card mb-4" style="border-radius: 20px;">
                                <div class="card-header py-3">
                                    <h3 class="my-0 fw-normal display-6">{{ item.titulo }}</h3>
                                </div>
                                <div class="card-body d-flex flex-column h-100">
                                    <div>
                                        <div class="card-title pricing-card-title display-5">
                                            <span v-if="item.precio === '../../contenido/becado.png'">
                                                <img :src="item.precio" alt="Globo promocional" class="img-card1">
                                                /
                                                <img src="../../public/contenido/clasico-tachado.png" alt=""
                                                    class="img-card1">
                                            </span>
                                            <img :src="item.precio" :alt="item.alt"
                                                v-else-if="item.precio === '../../contenido/clasico-edit.png'"
                                                class="img-card2">
                                            <span v-else style="font-weight: 800;">
                                                {{ item.precio }}
                                            </span>
                                        </div>
                                        <span class="lead" v-if="item.precio != 'Contactanos'">Mensual</span>
                                    </div>

                                    <ul class="p-0 m-0 ms-3 d-flex flex-column" style="width: 90%; gap: 16px;">
                                        <li v-for="elemento in  item.beneficios" :key="elemento.id" class="text-start ">
                                            {{ elemento.beneficio }}</li>
                                    </ul>
                                    <button type="button" class="w-100 btn btn-lg btn-outline-primary m-auto mb-0">{{
                                        item.boton
                                    }}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--
                                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Launch demo modal
                    </button>
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    ...
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    -->

                </section>
                <Slider></Slider>
            </div>
        </main>


    </q-page>
</template>

<script>
//Vue.loadScript("").then(() => {
// Código en caso de que tu script cargue
//}).catch(() => {
// Código en caso de que la carga de tu script fallé
//});
import Header from '../components/Header.vue';
import Pie from '../components/Pie.vue';
import Slider from '../components/reutilizable/Slider.vue';

export default {
    name: 'Premium',
    components: {
        Header,
        Pie,
        Slider
    },
    data() {
        return {
            celus: [
                {
                    url: '../../contenido/celu1.png',
                    alt: 'pantalla1',
                    description: 'Lorem ipsum dolor sit amet, consectetur'
                },
                {
                    url: '../../contenido/celu2.png',
                    alt: 'pantalla2',
                    description: 'Lorem ipsum dolor sit amet, consectetur'
                },
                {
                    url: '../../contenido/celu3.png',
                    alt: 'pantalla3',
                    description: 'Lorem ipsum dolor sit amet, consectetury'
                }
            ],
            cards: [
                {
                    titulo: 'Becado',
                    precio: '../../contenido/becado.png',
                    beneficios: [
                        { id: '1', beneficio: 'Apoyar a SugarCoach' },
                        { id: '2', beneficio: 'Licencia Premium' },
                        { id: '3', beneficio: 'Parenting' },
                        { id: '4', beneficio: 'Telemedicina' },
                        { id: '5', beneficio: 'Mensajes automáticos de emergencia con geolocalización' },
                    ],
                    boton: 'Seleccionar'
                },
                {
                    titulo: 'Clasico',
                    precio: '../../contenido/clasico-edit.png',
                    beneficios: [
                        { id: '1', beneficio: 'Apoyar a SugarCoach' },
                        { id: '2', beneficio: 'Licencia Premium' },
                        { id: '3', beneficio: 'Parenting' },
                        { id: '4', beneficio: 'Telemedicina' },
                        { id: '5', beneficio: 'Mensajes automáticos de emergencia con geolocalización' },
                        { id: '6', beneficio: 'Serán los primeros en usar la conexión automática con dispositivos, Glucómetros, CMG, Bombas, etc.' },
                        { id: '7', beneficio: 'Podrán canjear los puntos por premios.' }
                    ],
                    boton: 'Comprar'
                },
                {
                    titulo: 'Para empresas',
                    precio: 'Contactanos',
                    beneficios: [
                        { id: '1', beneficio: 'Apoyar a SugarCoach' },
                        { id: '2', beneficio: '5 Licencias Premium para distribuir entre ONGs C/' },
                        { id: '3', beneficio: 'Su marca y logo aparecerá en nuestro ranking de Top Tier Patrons' },
                        { id: '4', beneficio: 'Oportunidad de apareceren artículos y notas de relevantes medios del RSE' }
                    ],
                    boton: 'Contactar'
                },
            ],
            scrolledDown: false,
            lastScrollPosition: 0,
            modalVisible: false,
            mostrarContenido: false
        }
    },
    created() {
        window.addEventListener("scroll", this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
        mostrarModal() {
            this.modalVisible = true;
        },
        cerrarModal() {
            this.modalVisible = false;
        },
        handleScroll() {
            const currentScrollPosition = window.scrollY;

            if (currentScrollPosition > this.lastScrollPosition) {
                // Haciendo scroll hacia abajo
                this.scrolledDown = true;
            } else {
                // Haciendo scroll hacia arriba
                this.scrolledDown = false;
            }
            this.mostrarContenido = !this.scrolledDown ? this.mostrarContenido : false

            this.lastScrollPosition = currentScrollPosition;
        },
        toggleContenido() {
            // Cambia el estado para mostrar u ocultar el contenido
            this.mostrarContenido = !this.mostrarContenido
                ;
        }
    },
    mounted() {
        document.title = 'Premium';
    }
}

</script>

<style>
/* Estilo para ocultar el header cuando se hace scroll hacia abajo */
.hidden {
    transform: translateY(-100%);
    transition: 200ms;
}

#premium {
    background-image: url('https://sugar.coach/wp-content/uploads/2021/11/contacto-1.jpg;');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    max-width: 100%;
    min-height: 100vh;
    padding-top: 100px;
}

#premium .card {
    min-width: 250px;
    width: auto;
    max-width: 100%;
    min-height: 100%;
    background: #1A1225;
    box-shadow: 0px 0px 20px rgb(220, 154, 241);
    border: 1px solid #A667E4;
    color: #A667E4;
    transition: 0.5s;
}

#premium .card:hover {
    background: rgba(255, 255, 255, 0.7);
    box-shadow: 0px 0px 35px rgb(190, 56, 231);
}

#premium .card ul {
    display: flex;
    flex-direction: column;
    list-style: none;
}

#premium .card ul li::before {
    content: '';
    display: inline-block;
    width: 25px;
    height: 25px;
    background-image: url('../../public/contenido/tick.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    margin-right: 10px;

}



.premium-presentacion {
    color: antiquewhite;
    z-index: 700;
    top: 105px;
    background-color: #3748A3;
    transition: 0.6s;
    max-width: 100%;
}

.flecha:hover {
    cursor: pointer
}

main {
    max-width: 100%;
}

.img-card1 {
    width: 100px;
}

.img-card2 {
    width: 200px;
}

@media only screen and (max-width: 375px) {
    .premium-presentacion {
        top: 85px;
    }
}</style>