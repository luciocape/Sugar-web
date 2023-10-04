<template>
    <section id="equipo" class="d-flex flex-column">
        <img src="../../../public/contenido/integrantes-equipo.png" alt="Equipo" class="d-md-none">
        <div class="equipo__contenedor">
            <div class="container">
                <h2 class="fw-bolder display-3 pt-5">Somos un equipo</h2>
                <p class="lead texto">Somos un grupo de mujeres decididas a mejorar la calidad de vida de las personas con
                    diabetes.<br><br>
                    SugarCoach nació de la necesidad de mantener vivos y sanos a los hijos de Isabel Berizzo, Agus y Tapi.
                    Como
                    muchas mamás de niños con DP1, Isabel se dio cuenta que controlar la enfermedad era un trabajo
                    exhaustivo.
                    Por eso pensó en crear una App que no solo resolviera su problema, sino que también pudiera ayudar a
                    otras
                    familias que vivían lo mismo.<br><br>
                    En 2021, junto a Verónica Aveldaño, nuestra COO lanzaron SugarCoah, un proyecto integral que incluye una
                    App
                    móvil, educativa y de contención para la comunidad de familias con diabetes tipo 1.<br><br>
                    Queremos darles la bienvenida a SugarCoach</p>
                <ul>
                    <li v-for="(item, index) in  integrantes" :key="index">{{ item.Nombre }} {{ item.cargo }}</li>
                </ul>
            </div>
        </div>

    </section>
</template>

<script>
export default {
    name: 'Equipo',
    data() {
        return {
            integrantes: [
                {
                    Nombre: 'Isabel Berizzo',
                    cargo: 'CEO & CTO FUNDADORA',
                },
                {
                    Nombre: 'Veronica Avendaño',
                    cargo: 'COO',
                },
                {
                    Nombre: 'Karin Chmiel',
                    cargo: 'CFO & Business',
                },
                {
                    Nombre: 'Debora Biain',
                    cargo: 'RSE & Relaciones Públicas'
                },
                {
                    Nombre: 'M.Eugenia Medina',
                    cargo: 'CMO',
                },
            ]
        }
    }
}
</script>

<style>
@media only screen and (min-width: 768px) {
    #equipo {
        background-image: url('https://sugar.coach/wp-content/uploads/2021/11/equipo.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
        background-position: center;
    }

    .equipo__contenedor {
        width: 100%;
        height: 100%;
        background-color: rgba(130, 36, 227, 0.5);
    }
}

.equipo__contenedor {
    color: antiquewhite;
}
</style>