<template>  
    <!-- Modal -->
    <div class="modal fade text-bg-secondary" id="modal_pago" data-bs-backdrop="static"
        data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content bg-dark"
                style="box-shadow: 0 0 30px rgb(0, 23, 24); min-width: 40vw;">
                <div class="modal-header">
                    <h4 class="modal-title fs-5" id="staticBackdropLabel">
                        {{ titulo_plan }}
                    </h4>
                    <button type="button" data-bs-dismiss="modal" aria-label="Close"
                        class="rounded-3"><svg xmlns="http://www.w3.org/2000/svg"
                            width="40" height="40" fill="currentColor"
                            class="bi bi-x-square-fill" viewBox="0 0 16 16"
                            loading="lazy">
                            <path
                                d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708" />
                        </svg></button>
                    </div>
                <div class="modal-body">
                    <p class="h2">Gracias por elegir nuestro servicio!</p>
                    <p class="text-start m-auto fw-light"
                        style="width: 90%; font-size: 17px">Para completar tu compra,
                        necesitamos que nos proporciones tu
                        correo electrónico. Te enviaremos un email con un enlace seguro
                        para que puedas realizar el pago con el método que prefieras.
                    </p>
                    <form action="https://formsubmit.co/admin.team@sugar.coach"
                        method="POST" class="mt-4">
                        <div class="mb-3 m-auto" style="width: 90%;">
                            <label class="text-start d-block ">Correo
                            electronico:</label>
                            <div>
                                <input type="email"
                                    class="form-control m-auto bg-dark-subtle"
                                    name="email" 
                                    placeholder="juanperez@gmail.com">
                            </div>
                        </div>
                        <input type="submit" class="btn btn-outline-secondary w-25">
                        <input type="hidden" name="_next" value="https://sugar.coach/premium">
                    </form>
                    <p class="mt-4 lead">Si tienes alguna duda o problema, puedes
                        contactarnos a admin.team@sugar.coach</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary"
                        data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name: 'Formulario_pago',
    props: ['titulo_plan'],
}
</script>