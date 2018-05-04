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

Vue.use(VueResource);

sync(store, router);

const app = new Vue({

    router,

    store,

    el: '#app',

    data() {
        return {
            fullscreenLoading: true,
        };
    }
});
