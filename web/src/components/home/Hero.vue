<template>
    <div id="myCarousel" class="hero carousel slide mb-6 w-100" data-bs-ride="carousel" style="">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true"
                aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div v-for="(item, index) in  carousels " :key="index" :class="item.claseCSS">
                <img :src="item.url" :alt="item.alt" class=" img-bg d-block w-100">
                <div class="color-bg"></div>
                <div class="container">
                    <div class="carousel-caption text-start ">
                        <h1 class="display-6 lead">{{ item.title }}</h1>
                        <p class="opacity-75 subtitulo">{{ item.description }}</p>
                    </div>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
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
                    claseCSS: 'carousel-item active',
                    url: 'https://sugar.coach/wp-content/uploads/2021/11/funciona.jpg',
                    alt: 'Slide 1',
                    title: 'Convertimos el control de la diabetes en un juego',
                    description: '',
                },
                {
                    claseCSS: 'carousel-item',
                    url: 'https://sugar.coach/wp-content/uploads/2021/11/slider2.jpg',
                    alt: 'Slider2',
                    title: 'La única App que necesitas',
                    description: 'De manera fácil y divertida los usuarios cargan valores de glucemia, insulina y carbohidratos  de cada comida del día.',
                },
                {
                    claseCSS: 'carousel-item',
                    url: 'https://sugar.coach/wp-content/uploads/2021/11/slider3-2.jpg',
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

.img-bg {
    min-height: 400px;
    max-height: 100vh;
}

.color-bg {
    content: "";
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(255, 255, 255, 0) 70%);
}

.subtitulo {
    font-size: 1rem;
    font-weight: 550;
}

@media only screen and (max-width: 768px) {
    .img-bg {
        object-fit: cover;
    }

}

@media only screen and (max-width: 425px) {
    body {
        font-size: 10px;
    }

}</style>