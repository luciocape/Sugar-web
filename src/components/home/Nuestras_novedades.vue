<template>
    <section id="nuestras_novedades" class="pt-5">
        <div class="mb-4">
            <h2 class="display-3">Seguí nuestras novedades</h2>
            <h3 class="lead">Sumate a nuestras redes sociales</h3>
        </div>

        <div class="social-links w-100">
            <ul class="w-100 d-flex justify-content-center gap-3">
                <li v-for="(item, index) in redes" :key="index" style="list-style: none;"><a :href="item.enlace"
                        target="_blank"><img :src="item.url" :alt="item.alt" class="logo-red-social"
                            style="width: 10vw;max-width: 60px; min-width: 20px; "></a></li>
            </ul>
        </div>
    </section>
</template>


<script>
export default {
    name: 'Nuestras_novedades',
    data() {
        return {
            redes: [
                {
                    enlace: 'https://www.instagram.com/sugar.coach/',
                    url: '../../../contenido/instagram-logo.png',
                    alt: 'Instagram'
                },
                {
                    enlace: 'https://www.facebook.com/SugarCoachApp',
                    url: '../../../contenido/facebook-logo.png',
                    alt: 'Facebook'
                },
                {
                    enlace: 'https://twitter.com/sugarcoachapp',
                    url: '../../../contenido/x-logo.png',
                    alt: 'X'
                },
                {
                    enlace: 'https://www.youtube.com/@sugarcoachproject3630',
                    url: '../../../contenido/youtube-logo.png',
                    alt: 'Youtube'
                },
                {
                    enlace: 'https://www.tiktok.com/@sugar.coach',
                    url: '../../../contenido/tiktok-logo.png',
                    alt: 'Tiktok'
                },
            ]
        }
    }
}
</script>

<style>
#nuestras_novedades {
    min-height: 25vh;
    padding: 30px;
}

.logo-red-social {
    width: 10vw;
    max-width: 60px;
    min-width: 20px;

    scale: 1;
    transition: 300ms;
}

.logo-red-social:hover {
    
    scale: 1.2;
    transition: 0.3s;
}
</style>