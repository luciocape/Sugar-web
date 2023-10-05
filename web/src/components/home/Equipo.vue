<template>
           <section id="equipo" class="d-flex justify-content-center align-items-center">
        <div class="equipo__contenedor">
            <h2 class="fw-bolder display-3">Somos un equipo</h2>
            <img src="../../../public/contenido/integrantes-equipo.png" alt="Equipo" class="img-equipo">
            <div class="equipo__contenedor__contenedor">
                <p class="lead texto">Somos un grupo de mujeres decididas a mejorar la calidad de vida de las familias
                    con
                    niños
                    con
                    diabetes.
                    SugarCoach nació de la necesidad de mantener vivos y sanos a los hijos de Isabel.
                    Como muchas mamás de niños con DT1, ella se dio cuenta que controlar la enfermedad era un trabajo
                    exhaustivo.
                    Por eso pensó en crear una App que no solo resolviera su problema, sino que también pudiera ayudar a
                    otras familias que vivían lo mismo.
                    En 2021, junto a Verónica Aveldaño, nuestra COO lanzaron SugarCoah, un proyecto integral que incluye una
                    App móvil, educativa y de contención para la comunidad de familias con diabetes tipo 1.
                    Queremos darles la bienvenida a SugarCoach</p>
                <ul class="lista-equipo">
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
                    Nombre: 'Agustina Olivo',
                    cargo: 'CM & Content Manager',
                },
                {
                    Nombre: 'Debora Biain',
                    cargo: 'RSE & Relaciones Públicas'
                },
                {
                    Nombre: 'M.Eugenia Medina',
                    cargo: 'Perfomance Coach',
                },
            ],

            imageUrl: 'ruta-de-la-imagen.jpg', // Reemplaza con la ruta de tu imagen
            loremText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, erat eu dictum bibendum, 
                    ligula felis tincidunt libero, euismod tincidunt massa odio in quam. In hac habitasse platea dictumst. Sed vel 
                    libero eu mi faucibus elementum ac a nulla. In lacinia, nisi nec tempus elementum, arcu tortor tempor 
                    libero, ac venenatis sapien justo a dui.`
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
    width: auto;
    float: left;
    border: 3px solid #fff;
    border-radius: 10px;
    margin-right: 30px;
}

.equipo__contenedor {
    background-color: rgb(255, 255, 255);
    color: black;
}

.lista-equipo {
    align-self: left;
    text-align: start;
    list-style-type: none;
    padding: 0;
    margin: 0;
}

</style>