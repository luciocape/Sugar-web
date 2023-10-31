<template>
    <q-page style="width: 100vw; min-height: 100vh;">
        <main class="w-100 h-100 d-flex flex-column justify-content-center align-items-center" style="margin-top: 105px;">
            <section class="container-lg mt-5 mb-5" style="min-height: 100vh;">
                <div class="contenedor-premios">
                    <div v-for="(elemento, index) in  cards" :key="index" class="card text-start rounded-1 border-0"
                        style="font-family: cursive;">
                        <img class="card-img-top" src="../../public/contenido/documento.png" :alt="elemento.alt">
                        <div class="card-body d-flex container-fluid">
                            <div class="row">
                                <div class="col-5 pe-0" style="border-right: 1px solid black;">
                                    <p class="puntos m-0 ms-1">{{ elemento.puntos }}</p>
                                    <p class="mb-1 ms-1">Puntos</p>
                                </div>
                                <div class="col-7">
                                    <h4 class="card-title">{{ elemento.title }}</h4>
                                    <p class="card-text">{{ elemento.description }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </q-page>
</template>

<script>
export default {
    name: 'Premios',
    components: {

    },
    data() {
        return {
            cards: [
                {
                    url: '',
                    alt: '',
                    title: 'card1',
                    description: 'Este premio es valido por ',
                    puntos: '6000',
                },
                {
                    url: '',
                    alt: '',
                    title: 'card1',
                    description: 'Este premio es valido por',
                    puntos: '5000',
                },
                {
                    url: '',
                    alt: '',
                    title: 'card1',
                    description: 'Este premio es valido por',
                    puntos: '8000',
                },
                {
                    url: '',
                    alt: '',
                    title: 'card1',
                    description: 'Este premio es valido por ',
                    puntos: '3000',
                },
                {
                    url: '',
                    alt: '',
                    title: 'card1',
                    description: 'Este premio es valido por ',
                    puntos: '10000',
                },
                {
                    url: '',
                    alt: '',
                    title: 'card1',
                    description: 'Este premio es valido por ',
                    puntos: '',
                },
                {
                    url: '',
                    alt: '',
                    title: 'card1',
                    description: 'Este premio es valido por ',
                    puntos: '',
                },
            ],
            restaurants: [],
            error: null,
            headers: { 'Content-Type': 'application/json' }
        }

    },
    methods: {
        parseJSON: function (resp) {
            return (resp.json ? resp.json() : resp);
        },
        checkStatus: function (resp) {
            if (resp.status >= 200 && resp.status < 300) {
                return resp;
            }
            return this.parseJSON(resp).then((resp) => {
                throw resp;
            });
        }
    },
    async mounted() {
        try {
            const response = await fetch("http://localhost:1337/restaurants", {
                method: 'GET',
                headers: this.headers,
            }).then(this.checkStatus)
                .then(this.parseJSON);
            this.restaurants = response
        } catch (error) {
            this.error = error
        }
    },
    mounted() {
        document.title = 'Premios';
    }
}

</script>

<style>
main {
    background-image: url('https://sugar.coach/wp-content/uploads/2021/11/contacto-1.jpg;');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
}

.container-lg {
    padding: 20px;
}

.contenedor-premios {
    width: 100%;
    display: grid;
    grid-template-columns:
        repeat(auto-fit,
            minmax(250px, 1fr));
    gap: 30px;
}

.contenedor-premios .card {
    width: 100%;
    min-height: 50vh;
    background: linear-gradient(#515658, #f4fbff);
    height: auto;
    box-shadow: 5px 5px 10px #3e4242;
}

.puntos {
    color: #164193;
    font-weight: 700;
    font-size: 1.5rem;
}
</style>