<template>
    <div class="d-flex justify-content-evenly w-100 flex-wrap gap-3" style="margin-top: 30vh;">
        <img v-for="(item, index) in  celus" class="align-items-center" style="width: 15vw; min-width: 200px;"
            :src="item.url" :alt="item.alt">
    </div>
</template>

<script>
export default{
    name: "Muestra_app",
    data() {
        return {
            celus: [
                {
                    url: '../../contenido/celu1.webp',
                    alt: 'Celular',
                    description: 'Lorem ipsum dolor sit amet, consectetur'
                },
                {
                    url: '../../contenido/celu2.webp',
                    alt: 'Celular',
                    description: 'Lorem ipsum dolor sit amet, consectetur'
                },
                {
                    url: '../../contenido/celu3.webp',
                    alt: 'Celular',
                    description: 'Lorem ipsum dolor sit amet, consectetury'
                }
            ],
        }
    }
}
</script>