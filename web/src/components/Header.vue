
<template>
    <div class="container-fluid position-fixed top-0 m-0 w-100" style="z-index: 999;">
        <header class="d-flex flex-wrap justify-content-center py-3 border-bottom m-0 w-100">
            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none ">
                <svg class="bi me-2" width="40" height="32">
                    <use xlink:href="#bootstrap" />
                </svg>
                <span class="fs-4">Simple Header</span>
            </a>
            <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
                <button class="navbar-toggler" type="button" name="button" data-bs-toggle="collapse"
                    data-bs-target="#opciones" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="opciones"><ul class="navbar-nav">
                        <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Home</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">Features</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">Pricing</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">FAQs</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">About</a></li>
                    </ul>
                </div>
            </nav>

        </header>
    </div>
</template>

<script>
export default {
    name: 'Header',
}
</script>