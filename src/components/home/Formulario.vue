<template>
    <section id="contactanos">
        <div class="container">
            <div class="mb-5">
                <h2 class="display-3">Contactanos</h2>
                <h3 class="lead">Para conocer más sobre nosotros y SugarCoach podés escribirnos, o seguir la comunidad en
                    las redes.</h3>
            </div>
            <form action="https://formsubmit.co/admin.team@sugar.coach" method="POST">
                <div v-for="(item, index) in inputs" :key="index" class="mb-3">
                    <label :for="item.for" class="form-label">{{ item.label }}</label>
                    <div v-if="item.id != 'mesage'">
                        <input :type="item.type" class="form-control form-controls" :name="item.id" :id="item.id"
                            :placeholder="item.placeholder">
                    </div>
                    <div v-else class="h-25">
                        <textarea class="form-control form-controls" :name="item.id" :id="item.id" :placeholder="item.placeholder"
                            style="max-height: 120px;"></textarea>
                    </div>
                </div>
                <input type="submit" class="btn btn-primary" style="width: 150px;">

                <input type="hidden" name="_next" value="https://sugar.coach/">
            </form>

        </div>

    </section>
</template>

<script>
export default {
    name: 'Formulario',

    data() {
        return {
            inputs: [
                {
                    id: 'name',
                    for: 'name',
                    placeholder: 'Juan Perez',
                    label: 'Tu nombre',
                    type: 'text',
                },
                {
                    id: 'email',
                    for: 'email',
                    placeholder: 'juanperez@gmail.com',
                    label: 'Tu correo electronico',
                    type: 'email',
                },
                {
                    id: 'mesage',
                    for: 'mesage',
                    placeholder: 'Hola, me gustaria saber...',
                    label: 'Tu mensaje',
                }
            ],
            label: 'Formulario'
        }
    }
}

</script>

<style scoped>
#contactanos {
    padding-top: 6vh;
    min-height: 90vh;
}
.form-controls{
    box-shadow: none;
}
.form-controls:hover{
    box-shadow: 0 0 20px rgba(4, 98, 185, 0.74);
    transition: 300ms;
    
}
</style>