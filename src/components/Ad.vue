<template>
    <div style="font-family: 'Comfortaa', sans-serif;" class="p-6 bg-gray-50 my-20">
        <div class="container mx-auto">
            <!-- Видео-слайдер -->
            <Swiper :modules="[Navigation, Autoplay]" :space-between="20" :loop="true"
                :autoplay="{ delay: 3000, disableOnInteraction: false }" :breakpoints="breakpoints" navigation
                class="rounded-2xl">
                <SwiperSlide v-for="(url, i) in videos" :key="i">
                    <div
                        class="bg-white rounded-2xl shadow-md overflow-hidden group transition-all duration-300 hover:shadow-xl">
                        <iframe
                            class="w-full h-[400px] rounded-2xl group-hover:scale-105 transition-transform duration-300"
                            :src="url" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen></iframe>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

/* YouTube iframe ссылки */
const videos = [
    "https://www.youtube.com/embed/UnTPyJSNNz8",
    "https://www.youtube.com/embed/fftJjdABaHk",
    "https://www.youtube.com/embed/EoAuMsqFE5M",
    "https://www.youtube.com/embed/J_oxYRASIgw",
    "https://www.youtube.com/embed/iB3WzA4nkH4",
];

/* Адаптивные настройки */
const breakpoints = {
    320: { slidesPerView: 1 },
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 4 },
};
</script>

<style>
.swiper-button-next,
.swiper-button-prev {
    color: white;
}
</style>
