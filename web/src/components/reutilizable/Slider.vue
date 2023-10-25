<template>
    <div class="slider position-absolute top-0">
        <div class="slide-track">
            <div  v-for="(item, index) in marcas" :key="index" class="slide">
                <img :src="item.url" :alt="item.alt">
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
                    url: '../../../contenido/campana.png',
                    alt: 'Logo Coca Cola',
                },
                {
                    nombre: 'Pepsi',
                    url: '../../../contenido/campana.png',
                    alt: 'Logo Pepsi',
                },
                {
                    nombre: 'Lays',
                    url: '../../../contenido/campana.png',
                    alt: 'Logo Lays',
                },
                {
                    nombre: 'Volkswagen',
                    url: '../../../contenido/campana.png',
                    alt: 'Logo Volkswagen',
                },
                {
                    nombre: 'Samsung',
                    url: '../../../contenido/campana.png',
                    alt: 'Logo Samsung',
                },
                {
                    nombre: 'Addidas',
                    url: '../../../contenido/campana.png',
                    alt: 'Logo Addidas',
                },
                {
                    nombre: 'Coca Cola',
                    url: '../../../contenido/campana.png',
                    alt: 'Logo Coca Cola',
                },
                {
                    nombre: 'Pepsi',
                    url: '../../../contenido/campana.png',
                    alt: 'Logo Pepsi',
                },
                {
                    nombre: 'Lays',
                    url: '../../../contenido/campana.png',
                    alt: 'Logo Lays',
                },
                {
                    nombre: 'Volkswagen',
                    url: '../../../contenido/campana.png',
                    alt: 'Logo Volkswagen',
                },
                {
                    nombre: 'Samsung',
                    url: '../../../contenido/campana.png',
                    alt: 'Logo Samsung',
                },
                {
                    nombre: 'Addidas',
                    url: '../../../contenido/campana.png',
                    alt: 'Logo Addidas',
                },
            ]
        }
    }
}

</script>

<style>
.slider {
    width: 75vw;
    height: auto;
    margin: auto;
    overflow: hidden;
}

.slider .slide-track {
    display: flex;
    animation: scroll 40s linear infinite;
    -webkit-animation: scroll 40s linear infinite;
    width: calc(200px * 14);
}

.slide {
    display: flex;
    flex-direction: row;
    width: 200px;
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
        -webkit-transform: translateX(calc(-200px * 7));
        transform: translateX(calc(-200px * 7));
    }
}
</style>