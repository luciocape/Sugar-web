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
                    url: 'https://sugar.coach/wp-content/uploads/2021/07/instagram-icon-150x150.png',
                    alt: 'Instagram'
                },
                {
                    enlace: 'https://www.facebook.com/sugarcoach/',
                    url: 'https://sugar.coach/wp-content/uploads/2021/07/facebook-icon-150x150.png',
                    alt: 'Facebook'
                },
                {
                    enlace: 'https://twitter.com/sugarcoach',
                    url: 'https://sugar.coach/wp-content/uploads/2021/07/twitter-icon.png',
                    alt: 'Twitter'
                },
                {
                    enlace: 'https://www.youtube.com/user/SugarCoach',
                    url: 'https://sugar.coach/wp-content/uploads/2021/07/youtube-icon.png',
                    alt: 'Youtube'
                },
                {
                    enlace: 'https://www.tiktok.com/sugarcoach/',
                    url: 'https://sugar.coach/wp-content/uploads/2021/11/tiktok.png',
                    alt: 'Tiktok'
                },
            ]
        }
    }
}
</script>

<style>
#nuestras_novedades {
    background-image: url('https://sugar.coach/wp-content/uploads/2021/11/contacto-1.jpg;');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;

    min-height: 25vh;
    padding: 30px;
}

.logo-red-social {
    width: 10vw;
    max-width: 60px;
    min-width: 20px;

    scale: 1;
    transition: 0.8s;
}

.logo-red-social:hover {
    
    scale: 1.2;
    transition: 0.8s;
}
</style>