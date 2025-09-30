<template>
    <header
        class="relative flex flex-col items-center justify-center h-screen bg-center bg-cover bg-no-repeat bg-scroll md:bg-fixed bg-[url('/src/assets/tech-construct.jpg')]">
        <div class="absolute inset-0 bg-black/70"></div>
        <div class="relative z-10 flex flex-col items-center text-center text-white px-4 gap-10 sm:gap-14 mt-20 sm:mt-32"
            style="font-family: 'Comfortaa', sans-serif;">
            <p class="uppercase tracking-widest text-sm sm:text-base md:text-lg">
                CRUD Group
            </p>
            <h1 class="text-3xl sm:text-5xl md:text-7xl flex">
                &lt;/ <p class="typing">RAQAMLI QURILISH</p> &gt;
            </h1>
            <span class="text-base sm:text-xl md:text-2xl max-w-2xl font-light">
                Qurilishdagi barcha jarayonlarni bir platformada nazorat qiling.
            </span>
            <router-link to="formPage"
                class="bg-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-black w-48 sm:w-64 font-medium hover:scale-105 transition-transform">
                Biz bilan aloqa
            </router-link>
        </div>

        <!-- стрелка вниз -->
        <div class="relative z-10 mt-32 sm:mt-40 text-center">
            <a href="#tasks">
                <i class="fa-solid fa-angle-down text-white text-3xl sm:text-5xl animate-bounce cursor-pointer"></i>
            </a>
        </div>
    </header>
</template>

<style>
.typing {
    overflow: hidden;
    white-space: nowrap;
    width: 0;
    animation: typing 3.5s steps(30, end) forwards,
        blink-caret 0.75s step-end infinite;
}

@keyframes typing {
    from {
        width: 0;
    }

    to {
        width: 100%;
    }
}

@keyframes blink-caret {

    0% {
            border-color: transparent;
        }
    
        50% {
            border-color: #fff;
        }
    
        100% {
            border-color: transparent;
        }
}
</style>
