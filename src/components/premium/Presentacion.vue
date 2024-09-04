<template>
    <div :class="{ 'hidden': !mostrarContenido }" class="position-fixed p-3 premium-presentacion">
        <h1 class="family-premium presentacion-h1 mb-0" :class="{ 'text-flicker-in-glow': mostrarContenido }">
            Premium</h1>
        <h2 class="family-premium presentacion-h2">Elige el plan perfecto para ti</h2>
        <p style="font-family: sans-serif; font-weight: 700;" class="text-center presentacion-p">
            Este proyecto se sustenta solo con el trabajo y el esfuerzo de los miembros del equipo. Todos
            relacionados de alguna manera con la <strong>diabetes tipo 1</strong>. Para seguir desarrollando este proyecto y
            solucionar los problemas de las chicos con <strong>diabetes infantil</strong> y sus familias, necesitamos tu ayuda!. Por
            eso puedes colaborar adquiriendo una <strong>licencia premium</strong> para ti y tu familia. Y si tienes una empresa puedes
            anunciarte y ayudar a la vez! Como? Comprando Licencias Premium para que nosotros podamos repartir entre
            aquellos que necesitan tu ayuda. Elige abajo el plan que más te guste</p>
    </div>
    <div :class="{ 'hidden': scrolledDown }" class="position-fixed p-3 w-100 premium-presentacion"
        style="height: 10vh; z-index: 600;">
        <span @click="toggleContenido" class="flecha">
            <svg xmlns="http://www.w3.org/2000/svg" style="height: 6vh;" fill="currentColor"
                class="bi bi-arrow-down-square-fill" viewBox="0 0 16 16" loading="lazy">
                <path
                    d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0" />
            </svg>
        </span>
    </div>
</template>

<script>
name: "Presentacion";
export default{
    data() {
        return {
            scrolledDown: false,
            lastScrollPosition: 0,
            modalVisible: false,
            mostrarContenido: true
        }
    },
    created() {
        window.addEventListener("scroll", this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
        mostrarModal() {
            this.modalVisible = true;
        },
        cerrarModal() {
            this.modalVisible = false;
        },
        handleScroll() {
            const currentScrollPosition = window.scrollY;

            if (currentScrollPosition > this.lastScrollPosition) {
                // Haciendo scroll hacia abajo
                this.scrolledDown = true;
            } else {
                // Haciendo scroll hacia arriba
                this.scrolledDown = false;
            }
            this.mostrarContenido = !this.scrolledDown ? this.mostrarContenido : false

            this.lastScrollPosition =  currentScrollPosition;
        },
        toggleContenido() {
            // Cambia el estado para mostrar u ocultar el contenido
            this.mostrarContenido = !this.mostrarContenido
                ;
        }
    },
}
</script>

<style scoped>
.family-premium {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
}
.hidden {
    transform: translateY(-100%);
    transition: 200ms;
}
.premium-presentacion {
    color: antiquewhite;
    z-index: 700;
    top: 105px;
    background-color: #3748A3;
    transition: 0.6s;
    max-width: 100%;
}
.flecha:hover {
    cursor: pointer
}
@media only screen and (min-height:510px) and (max-width: 678px) {
    .presentacion-h1 {
        font-size: 11vw !important;
    }

    .presentacion-h2 {
        font-size: 7vw !important;
    }

    .presentacion-p {
        font-size: 2.7vw !important;
    }
}

@media only screen and (min-height:510px) and (max-width: 415px) {
    .presentacion-h1 {
        font-size: 12vw !important;
    }

    .presentacion-h2 {
        font-size: 7.2vw !important;
    }

    .presentacion-p {
        font-size: 3.4vw !important;
    }
}

@media only screen and (min-height:510px) and (max-width: 375px) {
    .premium-presentacion {
        top: 85px;
    }
}

@media only screen and (min-height:510px) and (max-width: 320px) {
    .presentacion-h1 {
        font-size: 12.5vw !important;
    }

    .presentacion-h2 {
        font-size: 7.3vw !important;
    }

    .presentacion-p {
        font-size: 3.7vw !important;
    }
}

@media only screen and (min-width: 678px) and (min-height: 510px) {
    .presentacion-h1 {
        font-size: 9vw;
    }

    .presentacion-h2 {
        font-size: 4vw;
    }

    .presentacion-p {
        font-size: 2vw;
    }
}

@media only screen and (max-height: 510px) {
    .presentacion-h1 {
        font-size: 8.4vw;
    }

    .presentacion-h2 {
        font-size: 3.8;
    }

    .presentacion-p {
        font-size: 1.8vw;
    }
}
</style>