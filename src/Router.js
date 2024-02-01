// Importa el módulo vue-router y los componentes que quieres usar
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'

// Define un array de objetos con las rutas
const routes = [
    {
        path: '/', // la ruta base
        name: 'Home', // el nombre de la ruta
        component: Home // el componente que se renderiza
    },
    {
        path: '/premium', // otra ruta
        name: 'Premium',
        component: ()=>import('@/views/Premium.vue')
    },
    {
        path: '/premios', // otra ruta
        name: 'Premios',
        component: ()=>import('@/views/Premios.vue')
    },
    {
        path:'/privacy',
        name: 'Priacy Policy',
        component: ()=>import('@/views/PrivacyPolicy.vue')
    },
    {
        path:'/account',
        name: 'Delete Account',
        component: ()=>import('@/views/DeleteAccount.vue')
    },
    {
        path:'/isa',
        name: 'IsaLinktree',
        component: ()=>import('@/views/Isa.vue')
    },
    {
        path: '/lab', // otra ruta
        name: 'SugarLab',
        component: ()=>import('@/views/Lab.vue')
    },
    {
        path: '/:catchAll(.*)', // otra ruta
        name: 'NotFound',
        component: ()=>import('@/views/404.vue')
    }
]

// Crea una instancia del router y pasa las rutas como opción
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), // usa el modo history para evitar el hash (#) en la URL
    routes // abreviatura de routes: routes
})

// Exporta el router para usarlo en tu aplicación
export default router