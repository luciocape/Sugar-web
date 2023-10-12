<template>
    <section id="formulario">
        <div class="container">
            <div class="mb-5">
                <h2 class="display-3">Contactanos</h2>
                <h3 class="lead">Para conocer más sobre nosotros y SugarCoach podés escribirnos, o seguir la comunidad en las redes</h3>
            </div>
            <div v-for="(item, index) in inputs" :key="index" class="mb-3">
                <label :for="item.for" class="form-label">{{ item.label }}</label>
                <div v-if="item.id != 'mensaje'">
                    <input type="text" class="form-control" :name="item.id" :id="item.id" :placeholder="item.placeholder">
                </div>
                <div v-else class="h-25">
                    <textarea class="form-control" :name="item.id" :id="item.id" :placeholder="item.placeholder" style="max-height: 120px;"></textarea>
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Enviar</button>
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
                    id: 'nombre',
                    for: 'exampleFormControlInput1',
                    placeholder: 'Juan Perez',
                    label: 'Tu nombre',
                },
                {
                    id: 'email',
                    for: 'exampleFormControlInput2',
                    placeholder: 'juanperez@gmail.com',
                    label: 'Tu correo electronico',
                },
                {
                    id: 'mensaje',
                    for: 'exampleFormControlTextarea1',
                    placeholder: 'Hola, me gustaria optener la version premium',
                    label: 'Tu mensaje',
                }
            ],
            label: 'Formulario'
        }
    }
}

</script>

<style>
#formulario {
    background-image: url('https://sugar.coach/wp-content/uploads/2021/11/contacto-1.jpg;');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;

    min-height: 90vh;
    padding-bottom: 50px;
}
</style>