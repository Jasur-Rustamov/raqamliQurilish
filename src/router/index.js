// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/homePage.vue'
import Form from '../pages/formPage.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/formPage', component: Form },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
