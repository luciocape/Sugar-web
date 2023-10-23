<template>
    <Header></Header>
    <q-page id="premium" class="d-flex justify-content-center align-items-center">
        <div class="container">
            <div class="row  gap-5 mb-3 text-center">
                <div v-for="(item, index) in  cards " :key="index" class="col">
                    <div class="card mb-4 rounded-3" >
                        <div class="card-header py-3">
                            <h4 class="my-0 fw-normal h3">{{ item.titulo }}</h4>
                        </div>
                        <div class="card-body">
                            <h1 class="card-title pricing-card-title">{{ item.precio }}</h1>
                            <ul class="list-unstyled mt-3 mb-4">
                                <li>{{ item.benificio1 }}</li>
                                <li>{{ item.benificio2 }}</li>
                                <li>{{ item.beneficio3 }}</li>
                                <li>{{ item.beneficio4 }}</li>
                            </ul>
                            <button type="button" class="w-100 btn btn-lg btn-outline-primary">Seleccionar</button>
                        </div>
                    </div>
                </div>
            </div>
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
export default {
    name: 'Premium',
    components: {
        Header,
        Pie
    },
    data() {
        return {
            cards: [
                {
                    titulo: 'Clasico',
                    precio: '25$',
                    benificio1: 'Sin anuncios',
                    benificio2: '10 users included',
                    benificio3: '2 GB of storage',
                    beneficio4: 'Email support',
                    beneficio5: 'Help center access'
                    



                },
                {
                    titulo: 'Becado',
                    precio: '0$',
                    benificio1: '',
                    benificio2: '',
                    benificio3: '',
                    beneficio4: '',
                },
                {
                    titulo: 'Para empresas',
                    precio: 'contactanos',
                    benificio1: '',
                    benificio2: '',
                    benificio3: '',
                    beneficio4: '',
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
#premium {
    background-image: url('https://sugar.coach/wp-content/uploads/2021/11/contacto-1.jpg;');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    max-width: 100vw;
    min-height: 100vh;
    padding-top: 150px;
}

#premium .card {
    min-width: 250px;
    max-width: 100vw;
    height: 60vh;
    min-height: 500px;
    background: linear-gradient(155deg, #e664b400, rgba(255, 255, 255, 0.39));
    box-shadow: 0px 0px 30px rgb(213, 155, 231);
    transition: 0.5s;
}
#premium .card:hover {
    background: linear-gradient(155deg, #e664b400, rgb(255, 255, 255));
    box-shadow: 0px 0px 50px rgb(201, 75, 240);
}
</style>