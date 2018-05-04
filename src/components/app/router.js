/**
 * @file 路由配置
 */

import Vue from 'vue';
import Router from 'vue-router';
// import moment from 'moment';

Vue.use(Router);

export default new Router({
    scrollBehavior: () => {
        return {
            y: 0
        }
    },
    linkActiveClass: 'active',
    routes: [{
        name: 'home',
        path: '/',
        component: resolve => require.async('page/home', resolve)
    }]
})
