import { createRouter, createWebHistory } from "vue-router";
import CalcularSaldo from '../views/CalcularSaldo.vue'
import AlertView from "../views/AlertView.vue";


const routes = [
    {
        path: '/',
        name: 'alert',
        component: AlertView

    },

    {
        
        path: '/calcular',
        name: 'calcular',
        component: CalcularSaldo
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes:routes
})

export default router