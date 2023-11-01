<template>
    <div class="slider">
        <div class="slide-track">
            <div v-for="(item, index) in marcas" :key="index" class="slide">
                <img v-if="item.nombre != 'Arcor'" :src="item.url" :alt="item.alt">
                <img v-else :src="item.url" :alt="item.alt" style="width: 9vw; margin: auto;">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Slider',
    data() {
        return {
            marcas: [
                {
                    nombre: 'Mercado Libre',
                    url: '../../../contenido/mercado-libre-edit.jpg',
                    alt: 'Logo Mercado Libre',
                },
                {
                    nombre: 'Santander',
                    url: '../../../contenido/santander-edit.png',
                    alt: 'Logo Santander Rio',
                },
                {
                    nombre: 'Globant',
                    url: '../../../contenido/globant-edit.png',
                    alt: 'Logo Globant',
                },
                {
                    nombre: 'Swiss Medical',
                    url: '../../../contenido/swiss-medical-edit.png',
                    alt: 'Logo Swiss Medical',
                },
                {
                    nombre: 'Techint',
                    url: '../../../contenido/techint-edit.png',
                    alt: 'Logo Techint',
                },
                {
                    nombre: 'Unilever',
                    url: '../../../contenido/unilever-edit.png',
                    alt: 'Logo Unilever',
                },
                {
                    nombre: 'Sanofi',
                    url: '../../../contenido/sanofi-edit.png',
                    alt: 'Logo Sanofi',
                },
                
                {
                    nombre: 'Nestle',
                    url: '../../../contenido/nestle-edit.png',
                    alt: 'Logo Nestle',
                },
                {
                    nombre: 'Arcor',
                    url: '../../../contenido/arcor-edit.png',
                    alt: 'Logo Arcor',
                },
                {
                    nombre: 'Mercado Libre',
                    url: '../../../contenido/mercado-libre-edit.jpg',
                    alt: 'Logo Mercado Libre',
                },
                {
                    nombre: 'Santander',
                    url: '../../../contenido/santander-edit.png',
                    alt: 'Logo Santander Rio',
                },
                {
                    nombre: 'Globant',
                    url: '../../../contenido/globant-edit.png',
                    alt: 'Logo Globant',
                },
                {
                    nombre: 'Swiss Medical',
                    url: '../../../contenido/swiss-medical-edit.png',
                    alt: 'Logo Swiss Medical',
                },
                {
                    nombre: 'Techint',
                    url: '../../../contenido/techint-edit.png',
                    alt: 'Logo Techint',
                },
                {
                    nombre: 'Unilever',
                    url: '../../../contenido/unilever-edit.png',
                    alt: 'Logo Unilever',
                },
                {
                    nombre: 'Sanofi',
                    url: '../../../contenido/sanofi-edit.png',
                    alt: 'Logo Sanofi',
                },
                
                {
                    nombre: 'Nestle',
                    url: '../../../contenido/nestle-edit.png',
                    alt: 'Logo Nestle',
                },
                {
                    nombre: 'Arcor',
                    url: '../../../contenido/arcor-edit.png',
                    alt: 'Logo Arcor',
                },

            ]
        }
    }
}

</script>

<style>
:root {
    --ancho-img: 15vw;
}

.slider {
    width: 90vw;
    height: auto;
    margin: auto;
    overflow: hidden;
}

.slider .slide-track {
    display: flex;
    animation: scroll 40s linear infinite;
    -webkit-animation: scroll 40s linear infinite;
    width: calc(var(--ancho-img) * 18);
}

.slide {
    display: flex;
    flex-direction: row;
    width: var(--ancho-img);
}

.slide img {
    width: 100%;
}

@keyframes scroll {
    0% {
        -webkit-transform: translateX(0);
        transform: translatex(0);
    }

    100% {
        -webkit-transform: translateX(calc(var(--ancho-img) * -9));
        transform: translateX(calc(var(--ancho-img) * -9));
    }
}
</style>