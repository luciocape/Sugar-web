<template>
	<div id="comunidad">
		<div class="color-bg-comunidad w-100">
			<!--<section class="w-100 d-flex flex-column justify-content-center align-items-center" style="height: 70vh; min-height: 350px;">
                    <h2 class="display-3">Testimonios</h2>
                    <div id="carouselTestimonios"
                        class="carousel slide h-50 w-100 d-flex align-items-center justify-content-center"
                        data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselTestimonios" data-bs-slide-to="0" class="active"
                                aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselTestimonios" data-bs-slide-to="1"
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
            </section>-->
			<section
				class="w-100 d-flex flex-column justify-content-center align-items-center"
			>
				<h2 class="display-3 mt-3">Comunidad</h2>
				<!--<div class="widget-feed">
                    <div class="elfsight-app-da60cb74-17eb-4c12-b30f-c0cde173e4a2" data-elfsight-app-lazy style="border-radius: 20px;!important">
                    </div>
                </div>-->
				<div class="contenedor-widget w-75" style="height: 80vh;">
					<iframe
                        title="SugarCoach-Instagram-feed"
						loading="lazy"
						src="https://embedsocial.com/api/pro_hashtag/a8480f997cee86c96639538498af63a3478fabd5"
						frameborder="0"
						marginheight="0"
						marginwidth="0"
                        class="w-100 h-100"
					></iframe>
				</div>
			</section>
		</div>
	</div>
</template>

<script>
name: "Testimonios";
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
				},
			],
		};
	},
};
</script>

<style scoped>
#comunidad {
	max-width: 100vw;
	height: 120vh;
	background-image: url("../../../public/contenido/7-Niños-con-SC.webp");
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	background-attachment: fixed;
}

.color-bg-comunidad {
	background-color: rgba(5, 237, 216, 0.5);
	height: 100%;
}

.contenedor-widget {
	overflow: hidden;
	max-height: 100vh;
}

.widget-feed {
	width: 60%;
	height: 111vh;
	border-bottom: 0;
	border-radius: 20px;
}

@media only screen and (max-width: 718px) {
	.widget-feed {
		width: 80%;
	}
}
</style>
