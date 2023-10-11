<template>
    <section id="equipo" class="d-flex justify-content-center  align-items-center m-0 pt-5 w-100">
        <div class="equipo__contenedor d-flex flex-column d-sm-block">
            <div class="container">
                <h2 class="fw-bolder display-3">Somos un equipo</h2>
                <img src="../../../public/contenido/integrantes-equipo.png" alt="Equipo" class="img-equipo">
                    <p class="texto">Somos un grupo de mujeres decididas a mejorar la calidad de vida de las familias
                        con
                        niños
                        con
                        diabetes.
                        SugarCoach nació de la necesidad de mantener vivos y sanos a los hijos de Isabel.
                        Como muchas mamás de niños con DT1, ella se dio cuenta que controlar la enfermedad era un trabajo
                        exhaustivo.
                        Por eso pensó en crear una App que no solo resolviera su problema, sino que también pudiera ayudar a
                        otras familias que vivían lo mismo.
                        En 2021, junto a Verónica Aveldaño, nuestra COO lanzaron SugarCoah, un proyecto integral que incluye
                        una
                        App móvil, educativa y de contención para la comunidad de familias con diabetes tipo 1.
                        Queremos darles la bienvenida a SugarCoach</p>
            </div>

            <ul class="lista-equipo mt-4 mb-5 contenedor-integrantes" style="text-align: center;">
                <li v-for="(item, index) in  integrantes" :key="index" style="min-width: 150px; width: 1fr;">
                    <div class="d-flex flex-column justify-content-center ali"><img :src="item.url" :alt="item.alt" height="" style="filter: grayscale(1) ;"
                            class="rounded-circle mb-2 w-75"><span class="fw-bold">{{ item.Nombre }}</span> <span
                            class="fw-light">{{ item.cargo }}</span></div>
                </li>
            </ul>

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
                    Nombre: 'Debora Biain',
                    cargo: 'RSE & Relaciones Públicas',
                    url: '../../../contenido/integrantes/devora.jpg',
                    alt: 'Devora Biain'
                }
                ,
                {
                    Nombre: 'Agustina Olivo',
                    cargo: 'CM & Content Manager',
                    url: '../../../contenido/integrantes/karina.jpg',
                    alt: 'Agustina Olivo'
                }
                ,
                {
                    Nombre: 'Isabel Berizzo',
                    cargo: 'CEO & CTO FUNDADORA',
                    url: '../../../contenido/integrantes/isabel.jpg',
                    alt: 'Isabel Berizzo'
                },
                {
                    Nombre: 'Veronica Avendaño',
                    cargo: 'COO',
                    url: '../../../contenido/integrantes/veronica.jpg',
                    alt: 'Veronica Avendaño'
                }
                ,
                {
                    Nombre: 'M.Eugenia Medina',
                    cargo: 'Perfomance Coach',
                    url: '../../../contenido/integrantes/eugenia.jpg',
                    alt: 'Maria Eugenia Medina'
                },
            ],
        }
    }
}
</script>

<style>
#equipo {
    margin: 100px auto;
    width: 85%;
}

.img-equipo {
    max-width: 350px;
    float: left;
    box-shadow: 0 0 30px rgba(93, 1, 168, 0.74);
    border-radius: 10px;
    margin-right: 30px;
}


.lista-equipo {
    align-self: left;
    text-align: start;
    list-style-type: none;
    padding: 0;
    margin: 0;
}

.contenedor-integrantes {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

@media only screen and (max-width: 589px) {
    .img-equipo {
        margin: 0 auto;
        margin-bottom: 30px;
        width: 100%;
        max-width: none;
    }
}
</style>