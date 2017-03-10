/**
 * @file app.js
 */

/* globals __inline, __uri */
import Vue from 'vue';
import VueResource from 'vue-resource';
import VueCookie from 'vue-cookie';
import Element from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
// import 'dep/element-ui-theme/index.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'dep/bootstrap/css/bootstrap.min.css';
import {sync} from 'vuex-router-sync';
import router from './router';
import store from '/store';
import session from './session.js';
import * as config from 'config';
import Navbar from 'component/navbar';
import CFooter from 'component/footer.vue';
import {mapState} from 'vuex';
// import VueHighcharts from 'vue-highcharts';

Vue.use(VueResource);
Vue.use(VueCookie);
Vue.use(Element);

sync(store, router);

router.beforeEach((to, from, next) => {
    if (to.name === 'logout') {
        session.logout();
        return;
    }

    if (to.name === 'login') {
        session.login();
        return;
    }


    if (session.isLogin()) {
        next();
    } else {
        session.refresh()
            .then(data => {
                next();
            })
            .catch(err => {
                console.log(err);
            });
    }
});

const app = new Vue({
    router,
    store,
    el: '#app',
    components: {
        Nav,
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

