<template>
    <q-page id="premium" class="d-flex flex-column justify-content-center align-items-center">
        <div class="contenedor-premium filtro">
            <div :class="{ 'hidden': !mostrarContenido }" class="position-fixed p-3 premium-presentacion">
                <h1 class="family-premium presentacion-h1 mb-0" :class="{ 'text-flicker-in-glow': mostrarContenido }">
                    Premium</h1>
                <h2 class="family-premium presentacion-h2">Elige el plan perfecto para ti</h2>
                <p style="font-family: sans-serif; font-weight: 700;" class="text-center presentacion-p">
                    Este proyecto se sustenta solo con el trabajo y el esfuerzo de los miembros del equipo. Todos
                    relacionados de alguna manera con la <strong>diabetes tipo 1</strong>. Para seguir desarrollando este proyecto y
                    solucionar los problemas de las chicos con <strong>diabetes infantil</strong> y sus familias, necesitamos tu ayuda!. Por
                    eso puedes colaborar adquiriendo una <strong>licencia premium</strong> para ti y tu familia. Y si tienes una empresa puedes
                    anunciarte y ayudar a la vez! Como? Comprando Licencias Premium para que nosotros podamos repartir entre
                    aquellos que necesitan tu ayuda. Elige abajo el plan que más te guste</p>
            </div>
            <div :class="{ 'hidden': scrolledDown }" class="position-fixed p-3 w-100 premium-presentacion"
                style="height: 10vh; z-index: 600;">
                <span @click="toggleContenido" class="flecha">
                    <svg xmlns="http://www.w3.org/2000/svg" style="height: 6vh;" fill="currentColor"
                        class="bi bi-arrow-down-square-fill" viewBox="0 0 16 16" loading="lazy">
                        <path
                            d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0" />
                    </svg>
                </span>
            </div>
            <main>
                <div class="d-flex justify-content-evenly w-100 flex-wrap gap-3" style="margin-top: 30vh;">
                    <img v-for="(item, index) in  celus" class="align-items-center" style="width: 15vw; min-width: 200px;"
                        :src="item.url" :alt="item.alt">
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
                                                    <img :src="item.precio" alt="Globo promocional" class="img-card1"
                                                        loading="lazy">
                                                    /
                                                    <img src="../../public/contenido/clasico-tachado.png"
                                                        alt="Precio tachado" class="img-card1" loading="lazy">
                                                </span>
                                                <img :src="item.precio" :alt="item.alt"
                                                    v-else-if="item.precio === '../../contenido/clasico-edit.png'"
                                                    class="img-card2" loading="lazy">
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

                                        <!-- Button trigger modal -->
                                        <button type="button" class="w-100 btn btn-lg btn-outline-primary m-auto mb-0"
                                            data-bs-toggle="modal" :data-bs-target="'#' + item.boton">
                                            {{
                                                item.boton
                                            }}
                                        </button>

                                        <!-- Modal -->
                                        <div class="modal fade text-bg-secondary" :id="item.boton" data-bs-backdrop="static"
                                            data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"
                                            aria-hidden="true">
                                            <div class="modal-dialog modal-dialog-centered">
                                                <div class="modal-content bg-dark"
                                                    style="box-shadow: 0 0 30px rgb(0, 23, 24); min-width: 40vw;">
                                                    <div class="modal-header">
                                                        <h4 class="modal-title fs-5" id="staticBackdropLabel">
                                                            {{ item.titulo }}
                                                        </h4>
                                                        <button type="button" data-bs-dismiss="modal" aria-label="Close"
                                                            class="rounded-3"><svg xmlns="http://www.w3.org/2000/svg"
                                                                width="40" height="40" fill="currentColor"
                                                                class="bi bi-x-square-fill" viewBox="0 0 16 16"
                                                                loading="lazy">
                                                                <path
                                                                    d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708" />
                                                            </svg></button>
                                                    </div>
                                                    <div class="modal-body">
                                                        <p class="h2">Gracias por elegir nuestro servicio!</p>
                                                        <p class="text-start m-auto fw-light"
                                                            style="width: 90%; font-size: 17px">Para completar tu compra,
                                                            necesitamos que nos proporciones tu
                                                            correo electrónico. Te enviaremos un email con un enlace seguro
                                                            para que puedas realizar el pago con el método que prefieras.
                                                        </p>
                                                        <form action="https://formsubmit.co/admin.team@sugar.coach"
                                                            method="POST" class="mt-4">
                                                            <div class="mb-3 m-auto" style="width: 90%;">
                                                                <label class="text-start d-block ">Correo
                                                                    electronico:</label>
                                                                <div>
                                                                    <input type="email"
                                                                        class="form-control m-auto bg-dark-subtle"
                                                                        name="email" :id="item.id"
                                                                        placeholder="juanperez@gmail.com">
                                                                </div>
                                                            </div>
                                                            <input type="submit" class="btn btn-outline-secondary w-25">

                                                            <input type="hidden" name="_next" value="http://sugar.coach">
                                                        </form>
                                                        <p class="mt-4 lead">Si tienes alguna duda o problema, puedes
                                                            contactarnos a admin.team@sugar.coach</p>
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary"
                                                            data-bs-dismiss="modal">Close</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
        </div>

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
import { useHead } from '@vueuse/head'

export default {
    name: 'Premium',
    components: {
        Header,
        Pie,
        Slider
    },
    setup() {

        useHead({
            // Can be static or computed
            title: 'SugarCoach - Premium: Accede a más beneficios y funciones por un precio asequible',
            meta: [
                {
                    name: `description`,
                    content: 'Mejora tu experiencia con Sugar Coach adquiriendo la versión premium. Accede a beneficios exclusivos para un control aún más efectivo de la diabetes infantil. Descubre todas las funciones y suscríbete hoy.',
                },
                {
                    name: `keywords`,
                    content: 'Versión premium, Beneficios exclusivos, Mejora en el control de la diabetes, Suscripción paga, Becado, Patrocina',
                },
            ],

        })
    },
    data() {
        return {
            celus: [
                {
                    url: '../../contenido/celu1.png',
                    alt: 'Celular',
                    description: 'Lorem ipsum dolor sit amet, consectetur'
                },
                {
                    url: '../../contenido/celu2.png',
                    alt: 'Celular',
                    description: 'Lorem ipsum dolor sit amet, consectetur'
                },
                {
                    url: '../../contenido/celu3.png',
                    alt: 'Celular',
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
            mostrarContenido: true
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
    // metaInfo: {
    //     title: 'Premium', // el título de la página
    //     meta: [
    //         { name: 'description', content: '' }, // la descripción de la página
    //         { name: 'keywords', content: '' } // las palabras clave de la página        
    //     ]
    // }
}

</script>

<style>
/* Estilo para ocultar el header cuando se hace scroll hacia abajo */
.hidden {
    transform: translateY(-100%);
    transition: 200ms;
}

#premium {
    background-image: url('../../public/contenido/nene-usando-app.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    max-width: 100%;
    min-height: 100vh;
    padding-top: 100px;
}

.contenedor-premium {
    max-width: 100%;
    min-height: 100vh;
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

.family-premium {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
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

@media only screen and (min-height:510px) and (max-width: 678px) {
    .presentacion-h1 {
        font-size: 11vw !important;
    }

    .presentacion-h2 {
        font-size: 7vw !important;
    }

    .presentacion-p {
        font-size: 2.7vw !important;
    }
}

@media only screen and (min-height:510px) and (max-width: 415px) {
    .presentacion-h1 {
        font-size: 12vw !important;
    }

    .presentacion-h2 {
        font-size: 7.2vw !important;
    }

    .presentacion-p {
        font-size: 3.4vw !important;
    }
}

@media only screen and (min-height:510px) and (max-width: 375px) {
    .premium-presentacion {
        top: 85px;
    }
}

@media only screen and (min-height:510px) and (max-width: 320px) {
    .presentacion-h1 {
        font-size: 12.5vw !important;
    }

    .presentacion-h2 {
        font-size: 7.3vw !important;
    }

    .presentacion-p {
        font-size: 3.7vw !important;
    }
}

@media only screen and (min-width: 678px) and (min-height: 510px) {
    .presentacion-h1 {
        font-size: 9vw;
    }

    .presentacion-h2 {
        font-size: 4vw;
    }

    .presentacion-p {
        font-size: 2vw;
    }
}

@media only screen and (max-height: 510px) {
    .presentacion-h1 {
        font-size: 8.4vw;
    }

    .presentacion-h2 {
        font-size: 3.8;
    }

    .presentacion-p {
        font-size: 1.8vw;
    }
}</style>