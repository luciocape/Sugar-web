<template>
    <q-page style="width: 100vw; min-height: 100vh;">
        <div class="premios">
            <main class="w-100 h-100 d-flex justify-content-center align-items-center filtro" style="margin-top: 105px;">
                <section class="w-75 mt-5 mb-5">
                    <div class="contenedor-premios">
                        <div v-for="premio in  premios_cargados" :key="premio.index"
                            class="card ms-0 ms-auto me-0 me-auto d-flex align-items-center text-start rounded-3 border-0"
                            style="font-family: cursive; max-height: 80vh; min-height: 60vh;">

                            <img class="h-75 w-75 mt-1" :src="premio.url" :alt="premio.titulo" loading="lazy">


                            <div class="card-body d-flex container-fluid" style="min-height: 30%;">
                                <div class="row d-flex align-items-center mb-2">
                                    <div class="col-5 pe-0" style="border-right: 1px solid black; height: 85%;">
                                        <div class="mt-4">
                                            <p class="puntos m-auto">{{ premio.puntos }}</p>
                                            <p class="m-auto">Puntos</p>
                                        </div>
                                    </div>
                                    <div class="col-7">
                                        <h4 class="card-title" style="font-size: 15px; font-weight: 700;">{{ premio.titulo
                                        }}
                                        </h4>
                                        <p class="card-text" style="font-size: 11px;">{{ premio.descripcion }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="contenedor-premios" v-if="premios.length > 0">
                        <div v-for="premio in  premios" :key="premio.id" class="card text-start rounded-3 border-0 premio"
                            style="font-family: cursive; max-height: 80vh; min-height: 60vh;">

                            <div class="h-75"
                                style="min-height: 250px; width: auto; margin: auto; margin-top: 20px; overflow: hidden;">
                                <img class="h-100 w-auto"
                                    :src="'http://localhost:1337' + premio.attributes.ImgPremio.data.attributes.formats.thumbnail.url"
                                    :alt="premio.attributes.Titulo" loading="lazy">
                            </div>

                            <div class="card-body d-flex container-fluid">
                                <div class="row">
                                    <div class="col-5 pe-0" style="border-right: 1px solid black;">
                                        <div class="mt-4">
                                            <p class="puntos m-auto">{{ premio.attributes.puntos }}</p>
                                            <p class="m-auto">Puntos</p>
                                        </div>
                                    </div>
                                    <div class="col-7">
                                        <h4 class="card-title" style="font-size: 15px; font-weight: 700;">{{
                                            premio.attributes.Titulo }}</h4>
                                        <p class="card-text" style="font-size: 11px;">{{ premio.attributes.Descripcion }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else style="margin: 25vh auto 5vh auto; position: relative; width: 60px;">
                        <div class="loader m-auto"
                            style="background-color: linear-gradient(0deg, rgb(8, 0, 73) 0%, rgb(0, 204, 255) 100%);">
                            
                        </div>
                        <div class="tap-loader">
                            <div class="filtro w-100 h-100" style="border-radius: 50%;"></div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    </q-page>
</template>

<script>
import { useHead } from '@vueuse/head'
export default {
    name: 'Premios',
    setup() {

        useHead({
            // Can be static or computed
            title: 'SugarCoach Rewards: Canjea tus puntos por giftcards de tus juegos favoritos',
            link:[
                {
                    rel:'canonical', 
                    href:"https://sugar.coach/premios"   
                }
            ],
            meta: [
                {
                    name: `description`,
                    content: 'Canjea puntos por increíbles premios en Sugar Coach. Obtén recompensas exclusivas al alcanzar tus metas de salud. Descubre cómo acumular puntos y elige tus premios favoritos.',
                },
                {
                    name: `keywords`,
                    content: 'Canje de puntos, Recompensas unicas, Metas de salud, Premios en SugarCoach., giftcards, Targeta de regalo para juegos',
                },
            ],

        })
    },
    data() {
        return {
            premios_cargados: [
                {
                    titulo: 'Tarjeta 13500 v-bucks',
                    descripcion: 'Este premio es valido por una giftcard de 13500 v-bucks',
                    url: '../../../contenido/tarjeta-fornite.webp',
                    puntos: '10000'
                },
                {
                    titulo: 'Tarjeta 26,5U$',
                    descripcion: 'Este premio es valido por una giftcard de 26,5U$',
                    url: '../../../contenido/tarjeta-minecraft.webp',
                    puntos: '10000'
                },
                {
                    titulo: 'Tarjeta xbox 25U$',
                    descripcion: 'Este premio es valido por una giftcard de 25U$',
                    url: '../../../contenido/tarjeta-xbox.webp',
                    puntos: '10000'
                }
            ],
            premios: [],
        };
    },
    async mounted() {
        try {
            // Realiza una consulta a Firebase para obtener los datos
            const querySnapshot = await getDocs(collection(db, 'sugar-premio'));

            // Procesa los datos
            const premios = [];
            querySnapshot.forEach((doc) => {
                premios.push({
                    id: doc.id,
                    ...doc.data(),
                });
            });

            this.premios = premios;
        } catch (error) {
            console.error(error);
        }
    },
};
</script>

<style scoped>
.premios {
    background-image: url('../../public/contenido/nene-usando-app.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
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
    width: 87%;
    min-height: 40vh;
    background: linear-gradient(#2d3c6b, #f4fbff);
    height: auto;
    box-shadow: 5px 5px 2px 4px #3e4242;
    transition: 200ms;
}

.contenedor-premios .card:hover {
    box-shadow: 0px 0px 0px 0px #3e4242;
    scale: 0.99;
    transform: translate(10px, 10px);
}

.puntos {
    color: #164193;
    font-weight: 700;
    font-size: 1.5rem;
}

.loader {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    position: relative;
    margin: 0 auto;
    background: linear-gradient(to right, rgb(8, 0, 73) 0%, rgb(0, 204, 255) 100%);
    animation: spin 1s linear infinite;

}
.tap-loader{
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background-image: url('../../public/contenido/nene-usando-app.jpg');
    background-attachment: fixed;
    background-position: center;
    position: absolute;
    background-repeat: no-repeat;
    background-size: cover;
    top: 7.5px;
    left: 7.5px;
}
@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}
</style>