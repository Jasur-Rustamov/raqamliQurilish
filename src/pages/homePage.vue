<template>
    <div>
        <!-- Твой контент -->
        <Header />
        <Task />
        <Ad />
        <Info />
        <Start />
        <Form />
        <Footer />

        <!-- Основная кнопка с анимацией -->
        <button @click="isOpen = !isOpen"
            class="fab-btn fixed bottom-6 right-6 text-white bg-black text-2xl p-5 rounded-full shadow-xl transition transform cursor-pointer hover:scale-110"
            :class="{ isOpen }">
            <i class="fa-solid fa-headset transition-transform duration-300"></i>
        </button>


        <!-- Кнопки -->
        <transition-group name="fab" tag="div" class="fixed bottom-29 right-6 flex flex-col gap-3">
            <a v-if="isOpen" key="call" href="tel:+998932221009"
                class="text-sm sm:text-base font-light tracking-wide text-gray-800 rounded-full shadow-md px-5 py-2 flex items-center justify-start bg-white transform transition duration-300 hover:scale-110 hover:shadow-lg"
                style="font-family: 'Comfortaa', sans-serif;">
                <i class="fa-solid fa-phone mr-2"></i>
                Qo'ng'iroq qilish
            </a>

            <a v-if="isOpen" key="chat" href="#form"
                class="text-sm sm:text-base font-light tracking-wide text-gray-800 bg-white rounded-full shadow-md px-5 py-2 flex items-center justify-start transform transition duration-300 hover:scale-110 hover:shadow-lg"
                style="font-family: 'Comfortaa', sans-serif;">
                <i class="fa-solid fa-comment-dots mr-2"></i>
                Ariza qoldirish
            </a>
        </transition-group>
    </div>
</template>

<script setup>
import Ad from "../components/Ad.vue";
import Header from "../components/Header.vue";
import Task from "../components/Task.vue";
import Info from "../components/Info.vue";
import Start from "../components/Start.vue";
import Footer from "../components/footer.vue";
import Form from "../components/Form.vue";
import { ref } from "vue";

const isOpen = ref(false);
</script>

<style>
/* Эффект фоновых кругов */
.fab-btn {
    position: fixed;
    /* фиксированно внизу */
    right: 1.5rem;
    /* то же, что right-6 */
    bottom: 1.5rem;
    /* то же, что bottom-6 */
    border-radius: 50%;
    z-index: 50;
}

.fab-btn::before,
.fab-btn::after {
    content: "";
    position: absolute;
    /* теперь относительно кнопки */
    inset: 0;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.2);
    z-index: -1;
    animation: pulse 2s infinite;
}

.fab-btn::after {
    animation-delay: 1s;
}

@keyframes pulse {
    0% {
        transform: scale(1);
        opacity: 0.6;
    }

    100% {
        transform: scale(2.5);
        opacity: 0;
    }
}
</style>
