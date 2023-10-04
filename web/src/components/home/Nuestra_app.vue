<template>
    <section id="nuestra_app" class="pt-5 pb-5">
        <div class="container">
            <h2 class="text-start display-3">Nuestra App</h2>
            <p class="texto lead">
                <strong class="strong">SugarCoach</strong> es una plataforma digital de automonitoreo de diabetes tipo 1 que acompaña al
                paciente a todas partes. Desde ahora, las personas llevarán el registro diario de sus valores en tu palma de
                la
                mano. <br><br>
                <strong class="strong">SugarCoach</strong> es una APP móvil diseñada para que el autocontrol sea divertido, especialmente
                para
                los chicos con diabetes tipo 1. Transformamos una rutina aburrida para tus hijos en un juego que premia su
                esfuerzo. Sumando puntos en cada etapa del tratamiento y de su control. <br><br>
                Además, cada miembro de la familia y del equipo médico está conectado a SugarCoach, teniendo acceso a la
                información que va cargando el usuario. Lo que permite mantener informado al grupo familiar en casos de
                emergencias.<br><br>
                <strong class="strong">SugarCoach</strong> <br><br>
                Recopila datos de diferentes fuentes en un solo lugar.<br><br>
                Conecta a médicos, pacientes y familias que conviven con la diabetes.<br><br>
                Es una experiencia de usuario gamificada que lo recompensa por cuidar su salud.<br><br>
                <span class="strong">Jugando cuidas la salud</span> 
            </p>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Nuestra_app',
    data() {
        return {

        }
    }
}
</script>

<style>
.texto {
    text-align: justify;
}

#nuestra_app {
    background-image: url('https://sugar.coach/wp-content/uploads/2021/11/nuestraapp.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: center;

}
#nuestra_app .container{
    background-color: rgba(255, 255, 255, 0.75);
    padding: 30px;
    border-radius: 20px;
}
.strong{
    font-weight: 900;
    opacity: 0.92;
}
</style>