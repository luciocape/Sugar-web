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
    metaInfo: {
        title: '', // el título de la página
        meta: [
            {
                name: 'description',
                content: 'Descubre Sugar Coach, la aplicación que transforma el control de la diabetes infantil en una experiencia gamificada. Supervisa de manera sencilla los niveles de glucosa, insulina, carbohidratos y más. Descarga la versión gratuita o mejora a la premium para acceder a beneficios exclusivos. Patrocina nuestra causa o canjea puntos por tarjetas de regalo. ¡Síguenos en nuestras redes y sigamos cuidandonos!'
            }, // la descripción de la página
            {
                name: 'keywords',
                content: 'Diabetes infantil, Aplicación para niños con diabetes'
            } // las palabras clave de la página
        ]
    }

}

</script>
