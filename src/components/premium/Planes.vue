<template>
	<div v-for="(item, index) in cards" :key="index" class="col p-0">
		<div class="card mb-4" style="border-radius: 20px">
			<div class="card-header py-3">
				<h3 class="my-0 fw-normal display-6">{{ item.titulo }}</h3>
			</div>
			<div class="card-body d-flex flex-column h-100">
				<div>
					<div class="card-title pricing-card-title display-5">
						<span v-if="item.precio === '../../../contenido/becado.webp'">
							<img
								:src="item.precio"
								alt="Globo promocional"
								class="img-card1"
								loading="lazy"
							/>
							/
							<img
								src="../../../public/contenido/clasico-tachado.webp"
								alt="Precio tachado"
								class="img-card1"
								loading="lazy"
							/>
						</span>
						<img
							:src="item.precio"
							:alt="item.alt"
							v-else-if="item.precio === '../../../contenido/clasico.webp'"
							class="img-card2"
							loading="lazy"
						/>
						<span v-else style="font-weight: 800">
							{{ item.precio }}
						</span>
					</div>
					<span class="lead" v-if="item.precio != 'Contactanos'">Mensual</span>
				</div>

				<ul
					class="p-0 m-0 ms-3 d-flex flex-column"
					style="width: 90%; gap: 16px"
				>
					<li
						v-for="elemento in item.beneficios"
						:key="elemento.id"
						class="text-start"
					>
						{{ elemento.beneficio }}
					</li>
				</ul>

				<!-- Button trigger modal -->
				<button
					type="button"
					class="w-100 btn btn-lg btn-outline-primary m-auto mb-0"
					data-bs-toggle="modal"
					data-bs-target="#modal_pago"
					@click="enviarTituloPlan(item.titulo)"
				>
					{{ item.boton }}
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Planes",
	data() {
		return {
			cards: [
				{
					titulo: "Becado",
					precio: "../../../contenido/becado.webp",
					beneficios: [
						{ id: "1", beneficio: "Apoyar a SugarCoach" },
						{ id: "2", beneficio: "Licencia Premium" },
						{ id: "3", beneficio: "Parenting" },
						{ id: "4", beneficio: "Telemedicina" },
						{
							id: "5",
							beneficio:
								"Mensajes automáticos de emergencia con geolocalización",
						},
					],
					boton: "Seleccionar",
				},
				{
					titulo: "Clasico",
					precio: "../../../contenido/clasico.webp",
					beneficios: [
						{ id: "1", beneficio: "Apoyar a SugarCoach" },
						{ id: "2", beneficio: "Licencia Premium" },
						{ id: "3", beneficio: "Parenting" },
						{ id: "4", beneficio: "Telemedicina" },
						{
							id: "5",
							beneficio:
								"Mensajes automáticos de emergencia con geolocalización",
						},
						{
							id: "6",
							beneficio:
								"Serán los primeros en usar la conexión automática con dispositivos, Glucómetros, CMG, Bombas, etc.",
						},
						{ id: "7", beneficio: "Podrán canjear los puntos por premios." },
					],
					boton: "Comprar",
				},
				{
					titulo: "Para empresas",
					precio: "Contactanos",
					beneficios: [
						{ id: "1", beneficio: "Apoyar a SugarCoach" },
						{
							id: "2",
							beneficio: "5 Licencias Premium para distribuir entre ONGs C/",
						},
						{
							id: "3",
							beneficio:
								"Su marca y logo aparecerá en nuestro ranking de Top Tier Patrons",
						},
						{
							id: "4",
							beneficio:
								"Oportunidad de apareceren artículos y notas de relevantes medios del RSE",
						},
					],
					boton: "Contactar",
				},
			],
		};
	},
	methods: {
		enviarTituloPlan(titulo) {
			this.$emit('mi-evento', titulo);
		},
	},
};
</script>

<style scoped>
.card {
	min-width: 250px;
	width: auto;
	max-width: 100%;
	min-height: 100%;
	background: #1a1225;
	box-shadow: 0px 0px 20px rgb(220, 154, 241);
	border: 1px solid #a667e4;
	color: #a667e4;
	transition: 0.5s;
}

.card:hover {
	background: rgba(255, 255, 255, 0.7);
	box-shadow: 0px 0px 35px rgb(190, 56, 231);
}

.card ul {
	display: flex;
	flex-direction: column;
	list-style: none;
}
.card ul li::before {
	content: "";
	display: inline-block;
	width: 25px;
	height: 25px;
	background-image: url("../../../public/contenido/tick.webp");
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;

	margin-right: 10px;
}
.img-card1 {
	width: 100px;
}

.img-card2 {
	width: 200px;
	mask-image: linear-gradient(
		#1a1225 70%,
		transparent
	);
}
</style>
