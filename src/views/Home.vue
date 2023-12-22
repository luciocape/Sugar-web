<template>
    <q-page>
        <Hero></Hero>
        <Descargar></Descargar>
        <main class="bg-body-secondary">
            <Como_funciona></Como_funciona>
            <Testimonios></Testimonios>
            <Nuestra_app></Nuestra_app>
            <Equipo></Equipo>
            <div class="bg-foot">
                <div class="filtro">
                    <Nuestras_novedades></Nuestras_novedades>
                    <Formulario></Formulario>
                </div>
            </div>
        </main>
    </q-page>
</template>

<script>
import Header from '../components/Header.vue';
import Hero from '../components/home/Hero.vue';
import Como_funciona from '../components/home/Como_funciona.vue';
import Nuestra_app from '../components/home/Nuestra_app.vue';
import Equipo from '../components/home/Equipo.vue';
import Pie from '../components/Pie.vue';
import Testimonios from '../components/home/Testimonios.vue';
import Descargar from '../components/reutilizable/Descargar.vue';
import Formulario from '../components/home/Formulario.vue';
import Nuestras_novedades from '../components/home/Nuestras_novedades.vue';
export default {
    name: 'Home',
    components: {
        Header,
        Hero,
        Descargar,
        Formulario,
        Como_funciona,
        Testimonios,
        Nuestra_app,
        Equipo,
        Nuestras_novedades,
        Pie

    },
    mounted() {
        document.title = 'Sugar Coach';
    }
}

</script>
