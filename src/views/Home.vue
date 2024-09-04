<template>
	<q-page>
		<Hero></Hero>

		<main class="bg-body-secondary">
			<Como_funciona></Como_funciona>
			<Testimonios></Testimonios>
			<Nuestra_app></Nuestra_app>
			<Equipo></Equipo>
			<div class="layout">
				<div class="filtro">
					<Nuestras_novedades></Nuestras_novedades>
					<Formulario></Formulario>
				</div>
			</div>
		</main>
		<Descargar></Descargar>
	</q-page>
</template>

<script>
import Hero from "../components/home/Hero.vue";
import Como_funciona from "../components/home/Como_funciona.vue";
import Descargar from "../components/reutilizable/Descargar.vue";
import Header from "../components/Header.vue";
import { useHead } from "@vueuse/head";
import { defineAsyncComponent } from "vue";

const Nuestra_app = defineAsyncComponent(() =>
	import("../components/home/Nuestra_app.vue")
);
const Equipo = defineAsyncComponent(() =>
	import("../components/home/Equipo.vue")
);
const Testimonios = defineAsyncComponent(() =>
	import("../components/home/Testimonios.vue")
);
const Formulario = defineAsyncComponent(() =>
	import("../components/home/Formulario.vue")
);
const Nuestras_novedades = defineAsyncComponent(() =>
	import("../components/home/Nuestras_novedades.vue")
);

export default {
	name: "Home",
	components: {
		Header,
		Hero,
		Descargar,
		Formulario,
		Como_funciona,
		Testimonios,
		Nuestra_app,
		Equipo,
		Nuestras_novedades,
	},
	setup() {
		useHead({
			// Can be static or computed
			title: "SugarCoach: La app que te ayuda a cuidar de tu hijo con diabetes",
			link: [
				{
					rel: "canonical",
					href: "https://sugar.coach",
				},
			],
			meta: [
				{
					name: `description`,
					content:
						"Descubre Sugar Coach, la aplicación gamificada que ayuda a niños con diabetes a controlar sus valores de salud. Descarga la app gratis, explora nuestras redes sociales, contacta con nosotros y mucho más.",
				},
				{
					name: `keywords`,
					content:
						"SugarCoach, aplicación, Diabetes infantil, Control de glucosa, App gamificada, Descarga gratuita, Versión premium, redes sociales, mysugr, social diabetes",
				},
			],
		});
	},
};
</script>
