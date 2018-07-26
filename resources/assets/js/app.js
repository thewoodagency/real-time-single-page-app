
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import Vue from 'vue';
import Vuetify from 'vuetify';
Vue.use(Vuetify);

import VueSimplemde from 'vue-simplemde';
Vue.use(VueSimplemde);
import md from 'marked';
window.md = md;

import VueResource from 'vue-resource';
Vue.use(VueResource);
window.EventBus = new Vue();

import router from './Router/router';
import User from './Helper/User';
window.User = User;  // User can be accessed from the entire Vue app.
console.log(User.loggedIn());

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

//Vue.component('example-component', require('./components/ExampleComponent.vue'));
Vue.component('AppHome', require('./components/AppHome.vue'));

const app = new Vue({
    el: '#app',
    router
});
