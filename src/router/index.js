import { createRouter, createMemoryHistory } from "vue-router";
import CalcularSaldo from '../views/CalcularSaldo.vue'
import AlertView from '../views/AlertView.vue'


const routes = [
    {
        path: '/',
        name: 'home',
        component: AlertView
    },

    {
        
        path: '/calcular',
        name: 'calcular',
        component: CalcularSaldo
    }
]

const router = createRouter({
    history: createMemoryHistory(process.env.BASE_URL),
    routes
})

export default router