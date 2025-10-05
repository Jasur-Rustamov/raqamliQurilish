<template>
    <div id="form"
        class="min-h-screen flex items-center justify-center bg-white border-t border-t-gray-300 px-4 sm:px-6 lg:px-8">
        <div class="w-full max-w-[1000px] grid grid-cols-1 md:grid-cols-2 gap-10">
            <!-- Left -->
            <div class="flex flex-col justify-center items-center text-center">
                <a :href="`tel:${phone}`" class="inline-flex items-center gap-2 text-black hover:text-gray-700">
                    <div class="flex flex-col items-center">
                        <i class="fa-solid fa-square-phone text-[80px] sm:text-[100px] lg:text-[110px]"></i>
                        <span class="text-base sm:text-lg font-medium underline">
                            {{ formattedPhone }}
                        </span>
                    </div>
                </a>
                <p class="mt-4 text-gray-600 text-sm sm:text-base text-center max-w-xs sm:max-w-sm">
                    Biz bilan to‘g‘ridan-to‘g‘ri bog‘lanish uchun ushbu raqamga qo‘ng‘iroq qiling.
                </p>
            </div>

            <!-- Right: form -->
            <form @submit.prevent="onSubmit" class="bg-white rounded-xl shadow-md p-6 sm:p-8 border border-gray-200">
                <h2 class="text-xl sm:text-2xl font-bold text-black mb-6 sm:mb-8">
                    Aloqa uchun
                </h2>

                <div class="space-y-5">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Ism</label>
                        <input v-model="form.name" type="text" required placeholder="Ismingizni kiriting"
                            class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:outline-none text-sm sm:text-base" />
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Viloyat</label>
                        <select v-model="form.region" required
                            class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:outline-none text-sm sm:text-base">
                            <option value="Andijon">Andijon</option>
                            <option value="Buxoro">Buxoro</option>
                            <option value="Jizzax">Jizzax</option>
                            <option value="Qashqadaryo">Qashqadaryo</option>
                            <option value="Navoiy">Navoiy</option>
                            <option value="Namangan">Namangan</option>
                            <option value="Samarqand">Samarqand</option>
                            <option value="Surxondaryo">Surxondaryo</option>
                            <option value="Sirdaryo">Sirdaryo</option>
                            <option value="Farg‘ona">Farg‘ona</option>
                            <option value="Xorazm">Xorazm</option>
                            <option value="Toshkent">Toshkent</option>
                            <option value="Qoraqalpog‘iston">Qoraqalpog‘iston Respublikasi</option>
                        </select>
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Aloqa uchun qulay vaqt</label>
                        <select v-model="form.time" required
                            class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:outline-none text-sm sm:text-base">
                            <option value="9-12">9:00 dan 12:00 gacha</option>
                            <option value="12-15">13:00 dan 17:00 gacha</option>
                            <option value="15-18">17:00 dan 20:00 gacha</option>
                        </select>
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Telefon raqam</label>
                        <input v-model="form.phone" type="tel" required placeholder="93 222 10 09"
                            class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:outline-none text-sm sm:text-base" />
                    </div>
                </div>

                <button type="submit" :disabled="sending"
                    class="mt-6 w-full py-3 bg-black hover:bg-gray-800 text-white font-medium rounded-lg transition-colors text-sm sm:text-base flex items-center justify-center gap-2">
                    <svg v-if="sending" class="w-5 h-5 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4">
                        </circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                    </svg>
                    <span v-if="!sending">Tasdiqlash</span>
                    <span v-else>Yuborilmoqda...</span>
                </button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { reactive, computed, ref } from 'vue'
import axios from 'axios'
import Swal from 'sweetalert2'

// Telefon link uchun
const phone = '+998932221009'
const formattedPhone = computed(() =>
    phone.replace(/(\+998)(\d{2})(\d{3})(\d{2})(\d{2})/, "$1 $2 $3 $4 $5")
)

// Forma ma'lumotlari
const form = reactive({
    name: '',
    region: 'Toshkent',
    time: '9-12',
    phone: ''
})

const sending = ref(false)

// --- O'zgartiring: o'zingizga mos Google Apps Script URL (exec) ---
const googleLink = "https://script.google.com/macros/s/AKfycbxUC2eNh2v_ccAhCoAfqaqjj8dOW5mc7vKiOEBiwwwHau8HwTh0RHocXh0LPxQH3k2Img/exec" // yoki /exec

// --- O'zgartiring: Telegram bot token va chat id ---
const token = "7772654953:AAHyRU3YazdhMMgPHzq0nXfZZYRAPMjyVvc"
const chat_id = "-1003066421710"

// Asosiy submit
async function onSubmit() {
    if (sending.value) return
    sending.value = true

    // oddiy sanitizatsiya
    const cleanPhone = form.phone.replace(/\D/g, "")
    const phoneWithCode = `'+998${cleanPhone}`

    // Google uchun params
    const params = {
        mijoz: form.name || "—",
        telefon: phoneWithCode,
        aloqa_vaqti: form.time,
        region: form.region,
        dastur: "Raqamli Qurilish"
    }

    // Telegram matni
    const text = `📩 Yangi ariza:
👤 Ism: ${form.name || "—"}
📞 Telefon: ${phoneWithCode}
📍 Viloyat: ${form.region}
⏰ Aloqa vaqti: ${form.time}`

    try {
        // 1) Google Apps Script ga yuborish (GET bilan params)
        // NOTE: agar GAS doGet/doPost sozlamalari to'g'ri bo'lsa, bu ishlaydi.
        await axios.get(googleLink, { params, timeout: 12000 })

        // 2) Telegram ga yuborish
        // (Agar siz xavfsizlik sababli tokenni serverga ko'chirsangiz, bu chaqiriq server orqali bo'lishi kerak)
        await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
            chat_id,
            text
        })

        // 3) Modalka: qo'ng'iroq qilishni taklif etish
        // Facebook Pixel event
        if (window.fbq) {
            fbq('track', 'Lead')
        }

        const res = await Swal.fire({
            title: "Ma'lumot yuborildi!",
            text: "Hozir qo‘ng‘iroq qilmoqchimisiz?",
            icon: "success",
            showCancelButton: true,
            confirmButtonText: "📞 Qo‘ng‘iroq qilish",
            cancelButtonText: "❌ Bekor qilish",
            confirmButtonColor: "#000000",
            cancelButtonColor: "#d33"
        })

        if (res.isConfirmed) {
            // telefon raqamga o'tish
            window.location.href = `tel:${phone}`
        }

        // forma tozalash
        form.name = ""
        form.region = "Toshkent"
        form.time = "9-12"
        form.phone = ""

    } catch (err) {
        console.error("API error:", err?.response?.data || err?.message || err)
        // Agar CORS yoki Network error bo'lsa, foydalanuvchiga aniqcha habar berish
        if (!err?.response) {
            Swal.fire({
                icon: "error",
                title: "Tarmoq xatosi yoki CORS",
                text: "Brauzer'dan Google Apps Script-ga bevosita bog'lanishda muammo yuz berdi. Iltimos, GAS ni `Deploy -> Web app` orqali `Anyone, even anonymous` qilib deploy qiling va /exec URL dan foydalaning."
            })
        } else {
            Swal.fire({
                icon: "error",
                title: "Xatolik",
                text: "Xabar yuborilmadi."
            })
        }
    } finally {
        sending.value = false
    }
}
</script>

<style scoped>
/* qo'shimcha kichik uslublar, agar kerak bo'lsa */
</style>
