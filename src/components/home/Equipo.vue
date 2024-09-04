<template>
    <section id="equipo" class="d-flex justify-content-center  align-items-center m-0 pt-5 w-100">
        <div class="equipo__contenedor d-flex flex-column d-sm-block">
            <div class="container">
                <h2 class="fw-bolder display-3">Somos un equipo</h2>
                <img src="../../../public/contenido/integrantes-equipo.webp" alt="Equipo" class="img-equipo item-appear"
                    loading="lazy">
                <p class="texto">Somos un equipo decidido a mejorar la calidad de vida de las familias de niños con <strong>diabetes
                    tipo 1</strong>. SugarCoach nació de la necesidad de mantener vivos y sanos a los hijos de Isabel. Como muchos
                    padres de niños con <strong>DT1</strong>, ella se dio cuenta que controlar la enfermedad era un trabajo exhaustivo y
                    cambiaba la dinamica para toda la familia <strong>(diabetes 3)</strong>. Por eso pensó en crear una aplicación
                    que no solo resolviera su problema, sino que también pudiera ayudar a otras familias que vivían lo
                    mismo. En 2021, junto a Verónica Aveldaño, nuestra COO lanzaron SugarCoach, un proyecto integral que
                    incluye una App móvil, educativa y de contención para la comunidad de familias con diabetes tipo 1.
                    Queremos darles la bienvenida a SugarCoach, la mejor solución para la diabetes.</p>
            </div>

            <ul class="lista-equipo mt-4 mb-5 contenedor-integrantes d-flex flex-wrap justify-content-center align-items-center gap-4"
                style="text-align: center;">
                <li v-for="(item, index) in  integrantes" :key="index" style="min-width: 150px;">
                    <div class="d-flex flex-column justify-content-center align-items-center"><img :src="item.url"
                            :alt="item.alt" style=" max-width: 100%;" class="rounded-circle mb-2 img-integrante item-appear"
                            loading="lazy"><span class="fw-bold">{{ item.Nombre }}</span> <span class="fw-light">{{
                                item.cargo }}</span></div>
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
                    url: '../../../contenido/integrantes/devora-circle.webp',
                    alt: 'Devora Biain'
                }
                ,
                {
                    Nombre: 'Karin Chmiel',
                    cargo: 'Business development',
                    url: '../../../contenido/integrantes/karin-circle.jpg',
                    alt: 'Karin Chmiel'
                }
                ,
                {
                    Nombre: 'Isabel Berizzo',
                    cargo: 'CEO & CTO FUNDADORA',
                    url: '../../../contenido/integrantes/isabel-circle.webp',
                    alt: 'Isabel Berizzo'
                },
                {
                    Nombre: 'Veronica Avendaño',
                    cargo: 'COO',
                    url: '../../../contenido/integrantes/veronica-circle.webp',
                    alt: 'Veronica Avendaño'
                }
                ,
                {
                    Nombre: 'Agustina Olivo',
                    cargo: 'CM & Content Manager',
                    url: '../../../contenido/integrantes/agustina-circle.jpg',
                    alt: 'Agustina Olivo'
                },
            ],
        }
    }
}
</script>

<style scoped>
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

.img-integrante {
    filter: grayscale(1);
    transition: 1s;
}

.img-integrante:hover {
    filter: grayscale(0);
    transition: 1s;
    box-shadow: 0 0 15px rgb(3, 73, 131);
    ;

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
}</style>