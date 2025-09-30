<template>
    <section class="min-h-screen bg-white text-center flex flex-col justify-center py-16 px-4"
        style="font-family: 'Comfortaa', sans-serif;">
        <h1 class="text-2xl sm:text-3xl md:text-[44px] font-bold mb-12">
            Qanday boshlaymiz?
        </h1>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <!-- Карточка -->
            <div v-for="(item, i) in steps" :key="i" class="flex flex-col gap-6 items-center">
                <div
                    class="w-16 h-16 sm:w-20 sm:h-20 bg-black rounded-full text-white flex justify-center items-center text-xl sm:text-2xl">
                    {{ i + 1 }}
                </div>
                <p class="text-lg sm:text-xl md:text-2xl font-medium">{{ item.title }}</p>
                <span class="text-sm sm:text-base font-light max-w-xs text-gray-700">
                    {{ item.text }}
                </span>
            </div>
        </div>
    </section>
</template>

<script setup>
const steps = [
    {
        title: "Aloqa o'rnatish",
        text: "Quyidagi blankani to'ldirib ariza qoldiring yoki 93 222 10 09 raqam orqali biz bilan aloqa o'rnating. Dastur haqida yanada chuqurlashtirilgan ma'lumot beramiz.",
    },
    {
        title: "Taqdimot o'tkazish",
        text: "Siz va jamoangizga qulay vaqtni belgilab online yoki ishxonangizda platformaning imkoniyatlari va ish ketma-ketliklarini taqdimot qilib beramiz. Ma'qul kelsa, shartnoma tuzib ishni boshlaymiz.",
    },
    {
        title: "O'quv amaliyot",
        text: "Barcha lavozimlar bo'yicha yo'riqnomalar video qo'llanma shaklida tayyorlangan. Shartnoma tuzilgandan birinchi hafta bu video qo'llanmalarni ko'rib chiqib har bir hodim bilan individual o'quv amaliyot ishlari olib boriladi.",
    },
    {
        title: "Ma'lumotlar kiritish",
        text: "Hozirgi amaldagi real ishlab turgan obyektlar va ularning ma'lumotlari PTO, Kassa, Ta'minotchi bo'limlari bilan birgalikda tayyorlanib Platformaga kiritiladi.",
    },
    {
        title: "Doimiy texnik yordam",
        text: "Barcha hodim va boshqaruvchilar uchun texnik yordam telegram platformasida guruh ochilgan holda amalga oshiladi. Bunda direktorlar hodimlarini qanday muommolar qiynayotganini online tarzda bilib borishlari mumkin.",
    },
    {
        title: "Sizning roziligingiz",
        text: "Qurilish jarayonlaringizni birgina Dastur orqali nazorat qilish sizni ko'p savollaringizga javob beradi. Korxongizni karrasiga oshishida ustuvor vosita sifatida </RAQAMLI QURILISH> dasturi albatta sizga ma'qul keladi.",
    },
];
</script>
