<template>
    <section id="tasks" class="bg-white text-center py-20 px-4" style="font-family: 'Comfortaa', sans-serif;">
        <h1 class="text-2xl sm:text-3xl md:text-[44px] font-bold mb-8">
            Barcha vazifalar nazorati bir platformada!
        </h1>
        <p class="text-base sm:text-lg md:text-2xl max-w-2xl mx-auto font-light">
            Qurilishdagi barcha jarayonlarni birgina dasturda nazorat qilin
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto mt-16">
            <!-- Карточка -->
            <div class="flex flex-col items-center gap-4">
                <img class="w-20 h-20 md:w-24 md:h-24" src="../assets/fine_money.svg" alt="Moliya">
                <p class="text-xl md:text-2xl pt-2">Moliya</p>
                <span class="text-sm sm:text-base font-light max-w-[280px]">
                    Smeta shakllanib obyekt topshirilgunga qadar barcha moliyaviy natijalar nazorati.
                </span>
            </div>

            <div class="flex flex-col items-center gap-4">
                <img class="w-20 h-20 md:w-24 md:h-24" src="../assets/people_money_crowdfunding.svg" alt="Pul oqimi">
                <p class="text-xl md:text-2xl pt-2">Pul oqimi</p>
                <span class="text-sm sm:text-base font-light max-w-[280px]">
                    Hodimlar o'rtasida pul oqimi va harajatlar nazorati.
                </span>
            </div>

            <div class="flex flex-col items-center gap-4">
                <img class="w-20 h-20 md:w-24 md:h-24" src="../assets/warehouse_storage.svg" alt="Homashyo">
                <p class="text-xl md:text-2xl pt-2">Homashyo</p>
                <span class="text-sm sm:text-base font-light max-w-[280px]">
                    Homashyo ombori ustidan to'liq nazorat.
                </span>
            </div>

            <div class="flex flex-col items-center gap-4">
                <img class="w-20 h-20 md:w-24 md:h-24" src="../assets/builder_worker.svg" alt="Qurilish jarayonlari">
                <p class="text-xl md:text-2xl pt-2">Qurilish jarayonlari</p>
                <span class="text-sm sm:text-base font-light max-w-[280px]">
                    Ustalarning bajargan ishlari va ular bilan hissob kitob. Bajarilgan ish sifati, vaqti.
                </span>
            </div>

            <div class="flex flex-col items-center gap-4">
                <img class="w-20 h-20 md:w-24 md:h-24" src="../assets/document_stamp_tour_agency.svg" alt="Smeta">
                <p class="text-xl md:text-2xl pt-2">Smeta</p>
                <span class="text-sm sm:text-base font-light max-w-[280px]">
                    Smeta shakllantirish va shakllangan smetani birgina tugma bilan dasturga kiritish.
                </span>
            </div>

            <div class="flex flex-col items-center gap-4">
                <img class="w-20 h-20 md:w-24 md:h-24" src="../assets/calendar_date_day.svg" alt="Qurilish ish re'jasi">
                <p class="text-xl md:text-2xl pt-2">Qurilish ish re'jasi</p>
                <span class="text-sm sm:text-base font-light max-w-[280px]">
                    Qachon, kim, nima ish qilishini belgilash va qachon qancha mablag'ga ehtiyoj bor.
                </span>
            </div>
        </div>
    </section>
</template>
