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
                title: '移动端Tab切换',
                path: ''
            }]
        }
    },

    mounted() {
        this.$root.fullscreenLoading = false;
    }
}
