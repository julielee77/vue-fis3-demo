/**
 * @file app.js
 */

/* globals __inline, __uri */
import Vue from 'vue';
import VueResource from 'vue-resource';
import Element from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import {
    sync
} from 'vuex-router-sync';
import router from './router';
import store from '/store';
// import * as config from 'config';
// import Navbar from 'component/navbar.vue';
import CFooter from 'component/footer';
/*import {
    mapState
} from 'vuex';*/

Vue.use(VueResource);
Vue.use(Element);

sync(store, router);

const app = new Vue({
    router,
    store,
    el: '#app',
    components: {
        // Navbar,
        CFooter
    },
    data() {
        return {
            fullscreenLoading: true
        };
    },
    created() {

    }
});
