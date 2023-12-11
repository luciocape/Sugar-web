<template>
    <q-page style="width: 100vw; min-height: 100vh;">
        <main class="w-100 h-100 d-flex flex-column justify-content-center align-items-center" style="margin-top: 105px;">
            <section class="container-lg mt-5 mb-5" style="min-height: 100vh;">
                <div class="contenedor-premios">

                    <div v-if="premios.length > 0" v-for="premio in  premios" :key="premio.id"
                        class="card text-start rounded-3 border-0"
                        style="font-family: cursive; max-height: 80vh; min-height: 60vh;">

                        <div class="h-75"
                            style="min-height: 250px; width: auto; margin: auto; margin-top: 20px; overflow: hidden;">
                            <img class="h-100 w-auto"
                                :src="'http://localhost:1337' + premio.attributes.ImgPremio.data.attributes.formats.thumbnail.url"
                                alt="premios.attributes.Titulo">
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
                                    <h4 class="card-title" style="font-size: 15px; font-weight: 700;">{{ premio.attributes.Titulo }}</h4>
                                    <p class="card-text" style="font-size: 11px;">{{ premio.attributes.Descripcion }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <p>Cargando...</p>
                    </div>
                </div>
            </section>
        </main>
    </q-page>
</template>

<script>

export default {
    name: 'Premios',
    data() {
        return {
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
    background: linear-gradient(#2d3c6b, #f4fbff);
    height: auto;
    box-shadow: 5px 5px 2px 4px #3e4242;
    transition: 200ms;
}
.contenedor-premios .card:hover{
    box-shadow: 0px 0px 0px 0px #3e4242;
    scale: 0.99;
    transform: translate(10px,10px);
}

.puntos {
    color: #164193;
    font-weight: 700;
    font-size: 1.5rem;
}
</style>