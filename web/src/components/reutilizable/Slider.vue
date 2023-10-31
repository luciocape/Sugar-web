<template>
    <div class="slider">
        <div class="slide-track">
            <div v-for="(item, index) in marcas" :key="index" class="slide">
                <img v-if="item.nombre != 'Arcor'" :src="item.url" :alt="item.alt">
                <img v-else :src="item.url" :alt="item.alt" style="width: 10vw; margin: auto;">
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
                    nombre: 'Coca Cola',
                    url: '../../../contenido/mercado-libre-edit.jpg',
                    alt: 'Logo Coca Cola',
                },
                {
                    nombre: 'Pepsi',
                    url: '../../../contenido/globant-edit.png',
                    alt: 'Logo Pepsi',
                },
                {
                    nombre: 'Lays',
                    url: '../../../contenido/swiss-medical-edit.png',
                    alt: 'Logo Lays',
                },
                {
                    nombre: 'Volkswagen',
                    url: '../../../contenido/techint-edit.png',
                    alt: 'Logo Volkswagen',
                },
                {
                    nombre: 'Samsung',
                    url: '../../../contenido/unilever-edit.png',
                    alt: 'Logo Samsung',
                },
                {
                    nombre: 'Addidas',
                    url: '../../../contenido/sanofi-edit.png',
                    alt: 'Logo Addidas',
                },
                {
                    nombre: 'Villa Vicencio',
                    url: '../../../contenido/santander-edit.png',
                    alt: 'Logo Villa Vicencio',
                },
                {
                    nombre: 'Coca Cola',
                    url: '../../../contenido/nestle-edit.png',
                    alt: 'Logo Coca Cola',
                },
                {
                    nombre: 'Arcor',
                    url: '../../../contenido/arcor-edit.png',
                    alt: 'Logo Coca Cola',
                },
                {
                    nombre: 'Coca Cola',
                    url: '../../../contenido/mercado-libre-edit.jpg',
                    alt: 'Logo Coca Cola',
                },
                {
                    nombre: 'Pepsi',
                    url: '../../../contenido/globant-edit.png',
                    alt: 'Logo Pepsi',
                },
                {
                    nombre: 'Lays',
                    url: '../../../contenido/swiss-medical-edit.png',
                    alt: 'Logo Lays',
                },
                {
                    nombre: 'Volkswagen',
                    url: '../../../contenido/techint-edit.png',
                    alt: 'Logo Volkswagen',
                },
                {
                    nombre: 'Samsung',
                    url: '../../../contenido/unilever-edit.png',
                    alt: 'Logo Samsung',
                },
                {
                    nombre: 'Addidas',
                    url: '../../../contenido/sanofi-edit.png',
                    alt: 'Logo Addidas',
                },
                {
                    nombre: 'Villa Vicencio',
                    url: '../../../contenido/santander-edit.png',
                    alt: 'Logo Villa Vicencio',
                },
                {
                    nombre: 'Coca Cola',
                    url: '../../../contenido/nestle-edit.png',
                    alt: 'Logo Coca Cola',
                },
                {
                    nombre: 'Arcor',
                    url: '../../../contenido/Arcor-edit.png',
                    alt: 'Logo Coca Cola',
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