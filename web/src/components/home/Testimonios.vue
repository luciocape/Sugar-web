<template>
    <section id="Testimonios" class="w-100">
        <div class="color-bg-testimonios w-100 d-flex flex-column justify-content-center align-items-center">
            <h2 class="display-3">Testimonios</h2>
            <div id="carouselExampleIndicators" class="carousel slide h-50 w-100 d-flex align-items-center justify-content-center">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                </div>
                <div class="carousel-inner h-100 container" style="border: 1px solid white; border-radius: 20px;">
                    <div v-for="(item, index) in items" :key="index" :class="item.claseCSS">
                        <div class="container m-0 m-auto d-flex flex-column justify-content-center h-100">
                            <p class="m-0 lead fw-bolder text-black-50">{{ item.experiencia }}</p>
                            <p class="mb-0 mt-3 lead fw-bolder text-black text-opacity-75 ">{{ item.nombre }}</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>


    </section>
</template>

<script>
name: "Testimonios"
export default {
    data() {
        return {
            items: [
                {
                    claseCSS: "carousel-item active h-100",
                    nombre: "Ana Claudia Respiggi",
                    experiencia: "Excelente y fácil de usar. La recomiendo!",
                },
                {
                    claseCSS: "carousel-item h-100",
                    nombre: "Gabriela Tiseyra",
                    experiencia: "Muy divertida",
                }
            ]
        }
    }
}
</script>

<style>
#Testimonios {
    min-height: 350px;
    height: 70vh;
    background-image: url('https://sugar.coach/wp-content/uploads/2021/11/TEstimonios.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;

}

.color-bg-testimonios {
    position: absolute;
    background-color: rgba(5, 237, 216, 0.5);
    height: 70vh;
    min-height: 350px;

}
</style>

