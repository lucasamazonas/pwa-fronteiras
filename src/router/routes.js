import Home from '../views/Home'
import Comunidades from '../views/Comunidade'

export default [
    // {
    //     path: '/',
    //     name: 'Home',
    //     component: Home
    // },
    {
        path: '/comunidades',
        name: 'Comunidades',
        component: Comunidades
    },
    {
        path: '/comunidades',
        name: 'Comunidades',
        component: Comunidades
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
]
