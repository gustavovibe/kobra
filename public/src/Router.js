import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'landing',
            component: () => import('./views/Landing.vue')
        },
				{
            path: '/cotizar',
            name: 'cotizar',
            component: () => import('./views/Cotizar.vue')
        },
		{
            path: '/cotizacion',
            name: 'cotizacion',
            component: () => import('./views/Cotizacion.vue')
        },
		{
            path: '/proyectos',
            name: 'proyectos',
            component: () => import('./views/Proyectos.vue')
        },
		{
            path: '/nosotros',
            name: 'nosotros',
            component: () => import('./views/Nosotros.vue')
        },
		{
            path: '/precios',
            name: 'precios',
            component: () => import('./views/Precios.vue')
        },
		{
            path: '/contacto',
            name: 'contacto',
            component: () => import('./views/Contacto.vue')
        },
		{
            path: '/paquetes',
            name: 'paquetes',
            component: () => import('./views/Paquetes.vue')
        },
    ]
});

export default router;