<template>
    <q-page style="width: 100vw; min-height: 100vh;">
        <main class="w-100 h-100 d-flex flex-column justify-content-center align-items-center" style="margin-top: 105px;">
            <section class="container-lg mt-5 mb-5" style="min-height: 100vh;">
                <div class="contenedor-premios">
                    
                    <div v-if="premios.length > 0" v-for="premio in  premios" :key="premio.id" class="card text-start rounded-1 border-0"
                        style="font-family: cursive;">
                        <img class="card-img-top" :src="'http://localhost:1337'+premio.attributes.ImgPremio.data.attributes.formats.thumbnail.url" alt="premios.attributes.Titulo">
                        <div class="card-body d-flex container-fluid">
                            <div class="row">
                                <div class="col-5 pe-0" style="border-right: 1px solid black;">
                                    <p class="puntos m-0 ms-1">{{ premio.attributes.puntos }}</p>
                                    <p class="mb-1 ms-1">Puntos</p>
                                </div>
                                <div class="col-7">
                                    <h4 class="card-title">{{ premio.attributes.Titulo }}</h4>
                                    <p class="card-text">{{ premio.attributes.Descripcion }}</p>
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
import api from '../api'; // Importa el archivo api.js que hemos creado antes

export default {
    name: 'Premios',
    data() {
        return {
            premios: [], // Aquí guardaremos los datos de la API
        };
    },
    async mounted() {
        // Hacemos la llamada a la API cuando el componente se monta
        try {
            const data = await api('/sugar-premios?populate=*&fields[0]=Titulo&fields[1]=Descripcion&fields[2]=puntos'); // Usamos la función api con la ruta del recurso
            this.premios = data.data; // Guardamos los datos en el estado del componente
        } catch (error) {
            console.error(error); // Manejamos el error si ocurre
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