<template>
    <div class="slider">
        <div class="slide-track">
            <div v-for="(item, index) in marcas" :key="index" class="slide">
                <img v-if="item.nombre != 'Arcor'" :src="item.url" :alt="item.alt" class="todos" loading="lazy">
                <img v-else :src="item.url" :alt="item.alt" class="arcor" style="width: 10vw;" loading="lazy">
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
    width: auto;
    height: auto;
    margin: auto;
    overflow: hidden;
    margin-top: 20px;
}

.slider .slide-track {
    display: flex;
    animation: scroll 40s linear infinite;
    -webkit-animation: scroll 40s linear infinite;
    width: calc(var(--ancho-img) * 18 + 15px);
}

.slide {
    display: flex;
    height: auto;
    gap: 15px;
}

.slide img {
    width: var(--ancho-img);
}

@keyframes scroll {
    0% {
        -webkit-transform: translateX(0);
        transform: translatex(0);
    }

    100% {
        -webkit-transform: translateX(calc(var(--ancho-img) * -9 + 15px));
        transform: translateX(calc(var(--ancho-img) * -9 + 15px));
    }
}

@media only screen and (max-width: 675px) {
    .slide img {
        width: 120px;
    }
}
.slider .slide-track {
    width: calc(120px * 18 + 15px);
}
.arcor{
    width: 115px;
}

@keyframes scroll {
    0% {
        -webkit-transform: translateX(0);
        transform: translatex(0);
    }

    100% {
        -webkit-transform: translateX(calc(120px * -8 + 20px));
        transform: translateX(calc(120px * -8 + 20px));
    }
}
</style>