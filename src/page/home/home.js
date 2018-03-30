/*
 ** @file
 ** @author
 */

import Vue from 'vue';

export default {
    name: 'home',

    template: __inline('home.html'),

    data() {
        return {
            list: [{
                title: 'Pagination',
                path: ''
            }]
        }
    },

    mounted() {
        this.$root.fullscreenLoading = false;
    }
}
