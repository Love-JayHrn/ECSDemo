/**
 * @Author: Jayhrn
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    // 业务中心
    {
        path: '/business/map',
        name: 'map',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/MapView.vue')
    },
    {
        path: '/business/location',
        name: 'location',
        component: () => import(/* webpackChunkName: "about" */ '../views/LocationView.vue')
    },
    {
        path: '/business/expressContact',
        name: 'expressContact',
        component: () => import(/* webpackChunkName: "about" */ '../views/ExpressContactView.vue')
    },
    {
        path: '/business/delivery',
        name: 'delivery',
        component: () => import(/* webpackChunkName: "about" */ '../views/DeliveryView.vue')
    },
    // 关于十漓
    {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
