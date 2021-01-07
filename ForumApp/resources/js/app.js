/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
import 'material-design-icons-iconfont/dist/material-design-icons.css';
window.Vue = require('vue');
import Vue from "vue";
import Vuetify from "vuetify";
import router from "./Router/router.js"
import AppStorage from './Helpers/AppStorage';
import Token from './Helpers/Token';
Vue.use(Vuetify);
//importing user helper class
import User from './Helpers/User';
window.User = User;
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))
import AppHome from './components/AppHome.vue';
Vue.component('app-home', AppHome);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    vuetify: new Vuetify(),
    el: '#app',
    router
});