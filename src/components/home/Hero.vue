<template>
    <div id="carouselExampleAutoplaying" class="carousel slide carousel-fade" data-bs-ride="carousel" style="min-width: 100%;">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div v-for="(item, index) in  carousels " :key="index" :class="item.claseCSS">
                <img :src="item.url" :alt="item.alt" class=" img-bg d-block w-100">
                <div class="color-bg"></div>
                <div class="container">
                    <div class="carousel-caption text-start mb-4 ps-0" style="left: 60px; width: 65%;">
                        <h1 class="display-6 .h1" style="font-weight: 700;">{{ item.title }}</h1>
                        <p class="opacity-75 subtitulo">{{ item.description }}</p>
                    </div>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<script>
export default {
    name: 'Hero',
    data() {
        return {
            carousels: [
                {
                    claseCSS: 'carousel-item active slide1',
                    url: '../../../contenido/nene-nena-usando-app.png',
                    alt: 'Slide 1',
                    title: 'Convertimos el control de la diabetes en un juego',
                    description: '',
                },
                {
                    claseCSS: 'carousel-item slide2',
                    url: '../../../contenido/nene-usando-app.jpg',
                    alt: 'Slider2',
                    title: 'La única App que necesitas',
                    description: 'De manera fácil y divertida los usuarios cargan valores de glucemia, insulina y carbohidratos  de cada comida del día.',
                },
                {
                    claseCSS: 'carousel-item slide3',
                    url: '',
                    alt: 'Slide 3',
                    title: 'Una experiencia gamificada',
                    description: 'Juega y gana recompensas del mundo gaming.',
                }
            ]
        }
    }

}
</script>

<style>
#myCarousel {
    z-index: 10;
}



.color-bg {
    content: "";
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(255, 255, 255, 0) 60%);
}

.subtitulo {
    font-size: 1rem;
    font-weight: 550;
}

.img-bg {
    min-height: 100vh;
    position: fixed;
    object-fit: cover;
}

.slide1,
.slide2,
.slide3 {
    position: relative;
    min-height: 100vh;
    max-width: 100%;
    clip-path: inset(0);
}


@media only screen and (max-width: 850px) {
    .img-bg {
        min-height: 80vh;
    }

    .slide1,
    .slide2,
    .slide3 {
        min-height: 80vh;
    }
}

@media only screen and (max-width: 700px) {
    .img-bg {
        min-height: 70vh;
    }

    .slide1,
    .slide2,
    .slide3 {
        min-height: 70vh;
    }
}
@media only screen and (max-width: 500px) {
    .img-bg {
        min-height: 60vh;
    }

    .slide1,
    .slide2,
    .slide3 {
        min-height: 60vh;
    }
}
</style>