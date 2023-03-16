<template>
    <swiper
        :spaceBetween="30"
        :effect="'fade'"
        :direction="'vertical'"
        :autoplay="{
            delay: 5000,
            disableOnInteraction: false,
        }"
        :pagination="{
            clickable: false,
        }"
        :navigation="false"
        :modules="modules"
        @autoplayTimeLeft="onAutoplayTimeLeft"
        class="w-full flex items-center justify-center lg:py-10"
    >


        <swiper-slide class="container mx-auto w-full flex items-center justify-between">
            <div class="w-full flex items-center justify-center">
                <div class="h-96 w-96 rounded-3xl overflow-hidden">
                    <img src="/img/slide1.png" alt="img" class="h-full w-full">
                </div>
            </div>
            <div class="autoplay-progress">
                <svg ref="progressCircle" viewBox="0 0 48 48">
                    <line x1="20" y1="1" x2="20" y2="47" fill="#000" stroke="#34BAD8" stroke-width="1.3" stroke-linecap="round"/>
                </svg>
            </div>
            <div class="w-full h-96 flex flex-col items-start gap-y-4">
                <div class="paragraph h-full flex flex-col justify-center w-full lg:w-10/12 lg:pl-10">
                    <h1 class="font-bold text-white text-2xl mb-4 lg:mb-5 lg:text-4xl">Lorem Ipsum</h1>
                    <p class="text-white text-base line-clamp-4 lg:text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem nihil, blanditiis ad quam labore odio dolore quia modi aut minus pariatur suscipit maiores officiis omnis quidem rerum eos reprehenderit nam.</p>
                </div>
            </div>
        </swiper-slide>
        
        <swiper-slide class="container mx-auto w-full flex items-center justify-between">
            <div class="w-full flex items-center justify-center">
                <div class="h-96 w-96 rounded-3xl overflow-hidden">
                    <img src="/img/slide2.jpg" alt="img" class="h-full w-full">
                </div>
            </div>
            <div class="w-full h-96 flex flex-col items-start gap-y-4">
                <div class="paragraph h-full flex flex-col justify-center w-full lg:w-10/12 lg:pl-10">
                    <h1 class="font-bold text-white text-2xl mb-4 lg:mb-5 lg:text-4xl">Neque Porro</h1>
                    <p class="text-white text-base line-clamp-4 lg:text-xl">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                </div>
            </div>
        </swiper-slide>

        <swiper-slide class="container mx-auto w-full flex items-center justify-between">
            <div class="w-full h-96 flex items-center justify-center">
                <div class="h-96 w-96 rounded-3xl overflow-hidden">
                    <img src="/img/slide3.jpg" alt="img" class="h-full w-full">
                </div>
            </div>
            <div class="w-full h-96 flex flex-col items-start gap-y-4">
                <div class="paragraph h-full flex flex-col justify-center w-full lg:w-10/12 lg:pl-10">
                    <h1 class="font-bold text-white text-2xl mb-4 lg:mb-5 lg:text-4xl">Set ut perspeciatis</h1>
                    <p class="text-white text-base line-clamp-4 lg:text-xl">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                </div>
            </div>
        </swiper-slide>

    </swiper>
</template>

<script>
    import { ref } from 'vue';
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import 'swiper/css';
    import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper';
    import "swiper/css/effect-fade";

    export default {
        components: {
            Swiper,
            SwiperSlide,
        },
        setup() {
            const progressCircle = ref(null);
            const progressContent = ref(null);
            const onAutoplayTimeLeft = (s, time, progress) => {
            progressCircle.value.style.setProperty('--progress', 1 - progress);
            // progressContent.value.textContent = `${Math.ceil(time / 1000)}s`;
        };
        return {
            onAutoplayTimeLeft,
            progressCircle,
            progressContent,
            modules: [Autoplay, Pagination, Navigation, EffectFade],
        };
        },
    };
</script>

<style scoped>
.swiper {
    width: 100%;
    height: 30rem;
}

.paragraph {
    background: #9DA017;
}

.line-clamp-4{
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;  
    overflow: hidden;
}

.autoplay-progress{
    color: black;
}

.autoplay-progress svg {
    --progress: 0;
    position: absolute;
    inset: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
    stroke-dashoffset: calc(100 * (1 - var(--progress)));
    stroke-dasharray: 90;
}

.bg-primary {
    background-color: #34BAD8;
}
</style>