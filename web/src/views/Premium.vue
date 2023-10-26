<template>
    <q-page id="premium" class="d-flex flex-column justify-content-center align-items-center">
        <div id="premium-presentacion" class="position-fixed">
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
        <div class="d-flex justify-content-evenly m-4 w-100">
            <img v-for="(item, index) in  celus" class="rounded-4" style="width: 15%;" :src="item.url" :alt="item.al">
        </div>
        <div class="m-4">
            <section>
                <div class="row  gap-3 mb-5 text-center">
                    <div v-for="(item, index) in  cards " :key="index" class="col p-0">
                        <div class="card mb-4" style="border-radius: 20px;">
                            <div class="card-header py-3">
                                <h4 class="my-0 fw-normal h3">{{ item.titulo }}</h4>
                            </div>
                            <div class="card-body d-flex flex-column h-100">
                                <h1 class="card-title pricing-card-title"><span v-if="item.precio === '0$'"><img
                                            src="../../public/contenido/free.png" alt="Globo promocional" width="100"> /
                                        <strike>25$</strike></span><span v-else>{{ item.precio }}</span></h1>
                                <ul class="list-unstyled mb-0 container">
                                    <li v-for="elemento in  item.beneficios" :key="elemento.id" style="line-height: 2.2;">{{
                                        elemento.beneficio }}</li>
                                </ul>
                                <button type="button" class="w-100 btn btn-lg btn-outline-primary m-auto mb-0">{{
                                    item.boton
                                }}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Slider></Slider>
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
                },
                {
                    url: '../../contenido/celu2.png',
                    alt: 'pantalla2',
                },
                {
                    url: '../../contenido/celu3.png',
                    alt: 'pantalla3',
                }
            ],
            cards: [
                {
                    titulo: 'Becado',
                    precio: '0$',
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
                    precio: '25$',
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

        }
    },
    methods: {
        ocultar() {
            let lastScrollTop = 0;
            premium_presentacion = document.getElementById('premium_presentacion')
            this.window.addEventListener("scroll", function () {
                let scrollTop = this.window.pageYOffset || document.documentElement.scrollTop;
                if (scrollTop > lastScrollTop) {
                    premium_presentacion.style.top = "-100vh";
                } else {
                    premium_presentacion.style.top = "105px";
                }
                lastScrollTop = scrollTop
            })
        }
    },
    mounted() {
        document.title = 'Premium';
    }
}

</script>

<style>
#premium {
    background-image: url('https://sugar.coach/wp-content/uploads/2021/11/contacto-1.jpg;');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    max-width: 100vw;
    min-height: 100vh;
    padding-top: 100px;
}

#premium .card {
    min-width: 250px;
    width: auto;
    max-width: 100vw;
    min-height: 100%;
    background: rgba(255, 255, 255, 0.35);
    box-shadow: 0px 0px 35px rgb(212, 140, 235);
    transition: 0.5s;
}

#premium .card:hover {
    background: rgba(255, 255, 255, 0.7);
    box-shadow: 0px 0px 50px rgb(190, 56, 231);
}

#premium-presentacion {
    color: antiquewhite;
    z-index: 700;
    top: 105px;
    background-color: #3748A3;
    min-height: 45vh;
}
</style>