<template>
	<q-page
		id="premium"
		class="layout d-flex flex-column justify-content-center align-items-center"
	>
		<div class="contenedor-premium filtro">
			<Presentacion></Presentacion>
			<main>
				<Muestra_app></Muestra_app>
				<div class="m-4">
					<section>
						<div class="row gap-3 mb-5 text-center">
							<Planes @mi-evento="manejarEvento"></Planes>
						</div>
						<Formulario_pago :titulo_plan="titulo"></Formulario_pago>
					</section>
					<Slider></Slider>
				</div>
			</main>
		</div>
	</q-page>
</template>

<script>
//Vue.loadScript("").then(() => {
// Código en caso de que tu script cargue
//}).catch(() => {
// Código en caso de que la carga de tu script fallé
//});
import Presentacion from "../components/premium/Presentacion.vue";
import Muestra_app from "../components/premium/Muestra_app.vue";
import Header from "../components/Header.vue";
import Pie from "../components/Pie.vue";
import { useHead } from "@vueuse/head";
import { defineAsyncComponent } from "vue";

const Formulario_pago = defineAsyncComponent(() =>
	import("../components/premium/Formulario_pago.vue")
);
const Slider = defineAsyncComponent(() =>
	import("../components/reutilizable/Slider.vue")
);
const Planes = defineAsyncComponent(() =>
	import("../components/premium/Planes.vue")
);

export default {
	name: "Premium",
	components: {
		Header,
		Pie,
		Presentacion,
		Muestra_app,
		Planes,
		Formulario_pago,
		Slider,
	},
	setup() {
		useHead({
			// Can be static or computed
			title:
				"SugarCoach - Premium: Accede a más beneficios y funciones por un precio asequible",
			link: [
				{
					rel: "canonical",
					href: "https://sugar.coach/premium",
				},
			],
			meta: [
				{
					name: `description`,
					content:
						"Mejora tu experiencia con Sugar Coach adquiriendo la versión premium. Accede a beneficios exclusivos para un control aún más efectivo de la diabetes infantil. Descubre todas las funciones y suscríbete hoy.",
				},
				{
					name: `keywords`,
					content:
						"Versión premium, Beneficios exclusivos, Mejora en el control de la diabetes, Suscripción paga, Becado, Patrocina",
				},
			],
		});
	},
	data() {
		return {
			titulo: "",
		};
	},
	methods: {
		manejarEvento(mensaje) {
			this.titulo = mensaje;
		},
	},
	// metaInfo: {
	//     title: 'Premium', // el título de la página
	//     meta: [
	//         { name: 'description', content: '' }, // la descripción de la página
	//         { name: 'keywords', content: '' } // las palabras clave de la página
	//     ]
	// }
};
</script>

<style scoped>
/* Estilo para ocultar el header cuando se hace scroll hacia abajo */

.contenedor-premium {
	max-width: 100%;
	min-height: 100vh;
}
</style>
