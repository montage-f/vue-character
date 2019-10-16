import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import Freeze from '@/views/Freeze';
import Observable from '@/views/Observable';
import PropsListeners from '@/views/PropsListeners';
import Functional from '@/views/Functional';
import VSlot from '@/views/VSlot';

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
            name: 'observable',
            component: Observable,
        }, {
            path: '/props-listeners',
            name: '/props-listeners',
            component: PropsListeners,
        }, {
            path: '/Functional',
            name: 'functional',
            component: Functional,
        }, {
            path: '/VSlot',
            name: 'vSlot',
            component: VSlot,
        }, {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        },
    ],
});
