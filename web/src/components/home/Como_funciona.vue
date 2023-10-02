<template>
    <section id="como_funciona">
        <div class="como_funciona__contenedor">
            <div>
                <h2>¿Como funciona?</h2>
                <p>Una plataforma movil para el control integral de la diabetes.</p>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-sm-12" v-for="(item, index) in items" :key="index">
                        <div class="card mb-3 " style="border: none; background-color: rgba(0, 0, 0, 0);">
                            <img src="../../../contenido/game-control.png" :alt="item.alt" class="rounded-4">
                            <div class="card-body">
                                <h5 class="card-title">{{ item.title }}</h5>
                                <p class="card-text">{{ item.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Como_funciona',
    data() {
        return {
            items: [
                {
                    title: 'Una experiencia gamificada',
                    description: 'Cada persona define su perfil y su historia clínica así SugarCoach puede comunicarse con su equipo médico. En cada comida, el usuario carga valores de glucemia, insulina y carbohidratos. Y lo más importante es que gana premios por cuidarse. SugarCoach se adapta a todos los tratamientos y dispositivos, incluso registra los perfiles de la Bomba Infusora de Insulina.',
                    url: '../../../contenido/game-control.png',
                    alt: 'Control de consola'
                },
                {
                    title: 'Aprendiendo a cuidarse',
                    description: 'Creamos una herramienta moderna, rápida y amigable diseñada desde el punto de vista del usuario real que permite al usuario crear hábitos saludables.  Con explicaciones sencillas para llevar un control eficiente de la Diabetes Tipo 1 el usuario juega y recibe recompensas del mundo gaming.',
                    url: '../../../contenido/mano-curadora.png',
                    alt: 'Mano curadora'
                },
                {
                    title: 'Manteniendo informado al grupo familiar',
                    description: 'Es muy común que la Diabetes Tipo 1 se presenta en niños desde corta edad. Por lo tanto, el control lo realizan los adultos responsables y pueden llevarlo varios integrantes de la familia. SugarCoach envía mensajes automáticos para alertar un episodio de hipoglucemia o hiperglucemia grave.',
                    url: '../../../contenido/campana.png',
                    alt: 'Campana'
                },
                {
                    title: 'Con informes claros y útiles para el médico',
                    description: 'SugarCoach envía informes regulares al equipo médico. Además cuenta con gráficos y estadísticas simples y útiles donde contrastar el desarrollo de la glucemia a lo largo del tiempo. Además permite la telemedicina.',
                    url: '../../../contenido/documento.png',
                    alt: 'Documento'
                }
            ]
        }
    }
}
</script>

<style>
#como_funciona {
    background-image: url('../../../contenido/nenes-usando-app.png');
    background-size: cover;
    background-color: rgba(255, 255, 255, 0.75);
}

.como_funciona__contenedor {
    padding-top: 100px;
    background-color: rgba(255, 255, 255, 0.75);
}
</style>