<template>
    <q-page>
        <main>
            <section>
                <div v-for="(elemento, index) in  cards" :key="index" class="contenedor-premios">
                    <div class="row">
                        <div class="col-4">
                            <div class="card">
                                <div class="card-body">
                                    <h3 class="card-title">Title</h3>
                                    <p class="card-text">Text</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    </q-page>
</template>

<script>
export default {
    name: 'Premios',
    components: {

    },
    data() {
        return {
            cards: [
                {
                    url: '',
                    alt: '',
                    descripcion: '',
                }
            ]
        }
    },
    mounted() {
        document.title = 'Premios';
    }
}

</script>

<style>
.contenedor-premios {
    display: grid;
    grid-template-columns: repeat(auto-fit,
            minmax(200px, 1fr));
    gap: 1;
}
</style>