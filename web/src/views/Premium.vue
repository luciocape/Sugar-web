<template>
    <q-page class="d-flex justify-content-center align-items-center" style="width: 100vw; height: 100vh;">
        <div class="container">
            <div  class="row  mb-3 text-center">
                <div class="col">
                    <div class="card mb-4 rounded-3 shadow-sm">
                        <div class="card-header py-3">
                            <h4 class="my-0 fw-normal">Free</h4>
                        </div>
                        <div class="card-body">
                            <h1 class="card-title pricing-card-title">$0<small
                                    class="text-body-secondary fw-light">/mo</small>
                            </h1>
                            <ul class="list-unstyled mt-3 mb-4">
                                <li>10 users included</li>
                                <li>2 GB of storage</li>
                                <li>Email support</li>
                                <li>Help center access</li>
                            </ul>
                            <button type="button" class="w-100 btn btn-lg btn-outline-primary">Sign up for free</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </q-page>
</template>

<script>
//Vue.loadScript("").then(() => {
    // Código en caso de que tu script cargue
//}).catch(() => {
    // Código en caso de que la carga de tu script fallé
//});

export default {
    name: 'Premium',

    data() {
        return {

        }
    },
    mounted() {
        document.title = 'Premium';
    }
}

</script>