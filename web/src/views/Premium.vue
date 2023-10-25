<template>
    <Header></Header>
    <q-page id="cards" class="d-flex justify-content-center align-items-center">
        <Slider></Slider>

        <div class="container-fluid m-4 mt-0">
            <h1 class="display-1">Premium</h1>
            <section>
                <h2 class="h2 mb-5">Elige el plan perfecto para vos</h2>
                <div class="row  gap-5 mb-3 text-center">
                    <div v-for="(item, index) in  cards " :key="index" class="col">
                        <div class="card mb-4" style="border-radius: 20px;">
                            <div class="card-header py-3">
                                <h4 class="my-0 fw-normal h3">{{ item.titulo }}</h4>
                            </div>
                            <div class="card-body">
                                <h1 class="card-title pricing-card-title">{{ item.precio }}</h1>
                                <ul class="list-unstyled mt-3 mb-4 container">
                                    <li v-for="elemento in  item.beneficios" :key="elemento.id" style="line-height: 2;">{{
                                        elemento.beneficio }}</li>
                                </ul>
                                <button type="button" class="w-100 btn btn-lg btn-outline-primary">{{item.boton}}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    </q-page>
    <Pie></Pie>
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
            cards: [
                {
                    titulo: 'Becado',
                    precio: '0$',
                    beneficios: [
                        { id: '1', beneficio: 'Sin anuncios' },
                        { id: '2', beneficio: '10 users included' },
                        { id: '3', beneficio: '2 GB of storage' },
                        { id: '4', beneficio: 'Email support' },
                        { id: '5', beneficio: 'Help center access' }
                    ],
                    boton: 'Seleccionar'
                },
                {
                    titulo: 'Clasico',
                    precio: '25$',
                    beneficios: [
                        { id: '1', beneficio: 'Sin anuncios' },
                        { id: '2', beneficio: '10 users included' },
                        { id: '3', beneficio: '2 GB of storage' },
                        { id: '4', beneficio: 'Email support' },
                        { id: '5', beneficio: 'Help center access' }
                    ],
                    boton: 'Comprar'
                },
                {
                    titulo: 'Para empresas',
                    precio: 'contactanos',
                    beneficios: [
                        { id: '1', beneficio: 'Sin anuncios' },
                        { id: '2', beneficio: '10 users included' },
                        { id: '3', beneficio: '2 GB of storage' },
                        { id: '4', beneficio: 'Email support' },
                        { id: '5', beneficio: 'Help center access' }
                    ],
                    boton: 'Contactar'
                },
            ]
        }
    },
    mounted() {
        document.title = 'Premium';
    }
}

</script>

<style>
#cards {
    background-image: url('https://sugar.coach/wp-content/uploads/2021/11/contacto-1.jpg;');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    max-width: 100vw;
    min-height: 100vh;
    padding-top: 150px;
}

#cards .card {
    min-width: 250px;
    max-width: 100vw;
    height: 60vh;
    min-height: 500px;
    background: rgba(255, 255, 255, 0.35);
    box-shadow: 0px 0px 35px rgb(212, 140, 235);
    transition: 0.5s;
}

#cards .card:hover {
    background: rgba(255, 255, 255, 0.7);
    box-shadow: 0px 0px 50px rgb(190, 56, 231);
}
</style>