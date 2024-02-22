<template>
    <section id="como_funciona">
        <div class="como_funciona__contenedor pb-5">
            <div class="text-center mb-4">
                <h2 class="display-3">¿Como funciona?</h2>
                <h3>Una plataforma movil para el control integral de la diabetes.</h3>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-sm-12 item-show">
                        <div class="card mb-3 d-flex align-items-center"
                            style="border: none; background-color: rgba(0, 0, 0, 0);">
                            <img :src="items.at(0).url" :alt="items.at(0).alt" class="rounded-4" width="70" loading="lazy">
                            <div class="card-body">
                                <h3 class="card-title h5">Una experiencia gamificada para el control de la <strong>diabetes
                                        tipo 1</strong></h3>
                                <p class="card-text texto">
                                    Cada persona define su perfil y su historia clínica así <b>SugarCoach</b> puede
                                    comunicarse con
                                    su equipo médico y ofrecerle un tratamiento personalizado de la
                                    <strong>diabetes</strong>. En cada
                                    comida, el usuario carga valores de glucemia, insulina y carbohidratos. Y lo más
                                    importante es que gana premios por cuidarse. <b>SugarCoach</b> se adapta a todos los
                                    tratamientos y dispositivos, incluso registra los perfiles de la <strong>Bomba Infusora
                                        de
                                        Insulina</strong>.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-12 item-show">
                        <div class="card mb-3 d-flex align-items-center"
                            style="border: none; background-color: rgba(0, 0, 0, 0);">
                            <img :src="items.at(1).url" :alt="items.at(1).alt" class="rounded-4" width="70" loading="lazy">
                            <div class="card-body">
                                <h3 class="card-title h5">Aprendiendo a cuidarse con una <strong>aplicación para
                                        diabéticos</strong></h3>
                                <p class="card-text texto">
                                    Creamos una herramienta moderna, rápida y amigable diseñada desde el punto de vista del
                                    usuario real que permite al usuario crear hábitos saludables. Con explicaciones
                                    sencillas para llevar un control eficiente de la <strong>diabetes tipo 1</strong> el
                                    usuario juega y
                                    recibe recompensas del <strong>mundo gaming</strong>.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-12 item-show">
                        <div class="card mb-3 d-flex align-items-center"
                            style="border: none; background-color: rgba(0, 0, 0, 0);">
                            <img :src="items.at(2).url" :alt="items.at(2).alt" class="rounded-4" width="70" loading="lazy">
                            <div class="card-body">
                                <h3 class="card-title h5">Manteniendo informado al grupo familiar sobre la <strong>diabetes
                                        infantil</strong></h3>
                                <p class="card-text texto">
                                    Es muy común que la <strong>diabetes</strong> se presenta en niños desde corta edad. Por
                                    lo tanto, el
                                    control lo realizan los adultos responsables y pueden llevarlo varios integrantes de la
                                    familia. <b>SugarCoach</b> envía mensajes automáticos para alertar un episodio de
                                    <strong>hipoglucemia</strong>
                                    o <strong>hiperglucemia</strong> grave.

                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-12 item-show">
                        <div class="card mb-3 d-flex align-items-center"
                            style="border: none; background-color: rgba(0, 0, 0, 0);">
                            <img :src="items.at(3).url" :alt="items.at(3).alt" class="rounded-4" width="70" loading="lazy">
                            <div class="card-body">
                                <h4 class="card-title h5">Con informes claros y útiles para el médico sobre la
                                    <strong>hemoglobina glicosilada</strong> <strong>(HbA1c)</strong></h4>
                                <p class="card-text texto">
                                    <b>SugarCoach</b> envía informes regulares al equipo médico para el seguimiento de la
                                    <strong>diabetes</strong>.
                                    Además cuenta con gráficos y estadísticas simples y útiles donde contrastar el
                                    desarrollo de la glucemia a lo largo del tiempo. Además permite la
                                    <strong>telemedicina</strong>.
                                </p>
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
                    title: 'Una experiencia gamificada para el control de la diabetes tipo 1',
                    description: 'Cada persona define su perfil y su historia clínica así SugarCoach puede comunicarse con su equipo médico y ofrecerle un tratamiento personalizado de la diabetes. En cada comida, el usuario carga valores de glucemia, insulina y carbohidratos. Y lo más importante es que gana premios por cuidarse. SugarCoach se adapta a todos los tratamientos y dispositivos, incluso registra los perfiles de la Bomba Infusora de Insulina.',
                    url: '../../../contenido/game-control.png',
                    alt: 'Control de consola'
                },
                {
                    title: 'Aprendiendo a cuidarse con una aplicación para diabéticos',
                    description: 'Creamos una herramienta moderna, rápida y amigable diseñada desde el punto de vista del usuario real que permite al usuario crear hábitos saludables. Con explicaciones sencillas para llevar un control eficiente de la diabetes tipo 1 el usuario juega y recibe recompensas del mundo gaming.',
                    url: '../../../contenido/mano-curadora.png',
                    alt: 'Mano Sanadora'
                },
                {
                    title: 'Manteniendo informado al grupo familiar sobre la diabetes infantil',
                    description: 'Es muy común que la diabetes se presenta en niños desde corta edad. Por lo tanto, el control lo realizan los adultos responsables y pueden llevarlo varios integrantes de la familia. SugarCoach envía mensajes automáticos para alertar un episodio de hipoglucemia o hiperglucemia grave.',
                    url: '../../../contenido/campana.png',
                    alt: 'Campana'
                },
                {
                    title: 'Con informes claros y útiles para el médico sobre la hemoglobina glicosilada (HbA1c)',
                    description: 'SugarCoach envía informes regulares al equipo médico para el seguimiento de la diabetes. Además cuenta con gráficos y estadísticas simples y útiles donde contrastar el desarrollo de la glucemia a lo largo del tiempo. Además permite la telemedicina.',
                    url: '../../../contenido/documento.png',
                    alt: 'Documento'
                }
            ],
            palabrasClave: ["diabetes infantil", "diabetes tipo 1", "hemoglobina glicosilada", "(HbA1c)", "telemedicina", "aplicación para diabéticos", "bomaba infusora de insulina", "hipoglucemia", "hiperglucemia"]
        }
    },
    computed: {
        esPalabraClave() {
            let obj = {};
            for (let palabra of this.palabrasClave) {
                obj[palabra] = true;
            }
            return obj;
        }
    }
}
</script>

<style>
#como_funciona {
    background-image: url('../../../public/contenido/1-Niños-con-SC.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

}

.como_funciona__contenedor {
    padding-top: 100px;
    background-color: rgba(255, 255, 255, 0.6);
}

/*Queries*/
@media only screen and (max-width: 768px) {
    #como_funciona {
        background-image: url('../../../public/contenido/nenes-usando-app.png');
    }
}</style>