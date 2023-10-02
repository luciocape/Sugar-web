<template>
    <div id="myCarousel" class="hero carousel slide mb-6 w-100" data-bs-ride="carousel" style="">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true"
                aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div v-for="(item, index) in  carousels " :key="index" :class="item.claseCSS" :style="item.imagen">
                <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                    <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
                </svg>
                <div class="container">
                    <div class="carousel-caption text-start">
                        <h1>Example headline.</h1>
                        <p class="opacity-75">Some representative placeholder content for the first slide of the carousel.
                        </p>
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
                    imagen: 'background-image: url(https://sugar.coach/wp-content/uploads/2021/11/slider1.jpg;); height: 578.16px; background-position: center 0px;'
                },
                {
                    claseCSS: 'carousel-item',
                    imagen: 'background-image: url(https://sugar.coach/wp-content/uploads/2021/11/slider2.jpg;); height: 578.16px; background-position: center 0px;'
                },
                {
                    claseCSS: 'carousel-item',
                    imagen: 'background-image: url(https://sugar.coach/wp-content/uploads/2021/11/slider3-2.jpg;); height: 578.16px; background-position: center 0px;'
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
</style>