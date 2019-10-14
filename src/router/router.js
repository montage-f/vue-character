import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import Freeze from '@/views/Freeze';
import Observable from '@/views/Observable';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        }, {
            path: '/freeze',
            name: 'freeze',
            component: Freeze,
        }, {
            path: '/observable',
            name: 'Observable',
            component: Observable,
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        },
    ],
});
