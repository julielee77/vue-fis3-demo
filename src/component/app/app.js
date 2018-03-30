/**
 * @file app.js
 */

/* globals __inline, __uri */
import Vue from 'vue';
import VueResource from 'vue-resource';
import 'normalize.css/normalize.css';
import {
    sync
} from 'vuex-router-sync';
import router from './router';
import store from '/store';
import Navbar from 'component/navbar'

Vue.use(VueResource);

sync(store, router);

const app = new Vue({

    router,

    store,

    el: '#app',

    components: {
        Navbar
    },

    data() {
        return {
            fullscreenLoading: true,
            navs: [{
                text: '首页',
                path: '/'
            }]
        };
    }
});
