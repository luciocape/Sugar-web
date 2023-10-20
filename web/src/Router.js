// Importa el módulo vue-router y los componentes que quieres usar
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Premium from './views/Premium.vue'
import NotFound from './views/404.vue'

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
        component: Premium
    },
    {
        path: '/:catchAll(.*)', // otra ruta
        name: 'NotFound',
        component: NotFound
    }
]

// Crea una instancia del router y pasa las rutas como opción
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), // usa el modo history para evitar el hash (#) en la URL
    routes // abreviatura de routes: routes
})

// Exporta el router para usarlo en tu aplicación
export default router