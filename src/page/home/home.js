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

        }
    },

    methods: {

    },

    mounted() {
        this.$root.fullscreenLoading = false;
    }
}
