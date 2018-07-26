/**
 * Created by jay on 7/9/18
 */

import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Login from '../components/login/Login';
import Signup from '../components/login/Signup';
import AppForum from '../components/AppForum';
import User from '../Helper/User';
import Read from '../components/forum/read';
import Create from '../components/forum/create';
import Category from '../components/forum/category';

const routes = [
    { path: '/login', component: Login },
    { path: '/signup', component: Signup },
    { path: '/logout', component:  User.logout },
    { path: '/forum', component: AppForum, name: 'forum' },
    { path: '/question/:slug', component: Read },
    { path: '/ask', component: Create },
    { path: '/category', component: Category }
];

const router = new VueRouter({
    routes, // short for `routes: routes`,
    hashbang: false,
    mode: 'history'
});

export default router;


