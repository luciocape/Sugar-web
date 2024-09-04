<template>
    <section id="nuestra_app" class="pt-5 pb-5">
        <div class="container">
            <h2 class="text-start display-3">Nuestra App</h2>
            <p class="texto">
                <strong class="strong">SugarCoach</strong> es una plataforma digital de seguimiento de la diabetes tipo 1 que acompaña al
                paciente a todas partes. Desde ahora, las personas llevarán el registro diario de sus valores en su palma de
                la
                mano. <br><br>
                <strong class="strong">SugarCoach</strong> es una APP móvil para la <strong>diabetes tipo 1</strong> diseñada para que el autocontrol sea divertido, especialmente
                para
                los chicos con <strong>diabetes infantil</strong>. Transformamos una rutina aburrida para tus hijos en un juego que premia su
                esfuerzo. Sumando puntos en cada etapa del <strong>tratamiento de la diabetes</strong> y de su control. <br><br>
                Además, cada miembro de la familia y del equipo médico está conectado a <strong>SugarCoach</strong>, teniendo acceso a la
                información que va cargando el usuario. Lo que permite mantener informado al grupo familiar en casos de
                emergencias.<br><br>
                <strong class="strong">SugarCoach</strong> <br><br>
                Recopila datos de diferentes fuentes en un solo lugar.<br><br>
                Conecta a médicos, pacientes y familias que conviven con la <strong>diabetes melitus 1</strong>.<br><br>
                Es una experiencia de usuario gamificada que lo recompensa por cuidar su salud.<br><br>
                <span class="strong">Jugando cuidas la salud</span><br>
                <a href="/premios" class="link-info link-offset-2-hover display-4 d-block mt-3" style="width: fit-content;">Ver premios</a>
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

<style scoped>
#nuestra_app {
    background-image: url('../../../public/contenido/11-niños-con-SC.webp');
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
</style>