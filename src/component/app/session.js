/**
@ file 会话管理
*/

import Vue from 'vue';
let storage = {};

export default {
    login(to) {
            to = to || encodeURIComponent(location.href);
            location.replace('...');
        },
        logout() {
            location.replace('');
        }

    //
    refresh() {
        return new Promise((resolve, reject) => {
            Vue.http.get('').
                .then(res => {
                    if (res && res.ok && res.body.username) {
                        storage.isLogin = true;
                        resolve(res.body);
                    } else {
                        throw new Error('can\'t get user');
                    }
                }).catch(err => {
                    reject(err);
                })
        })
    }

    isLogin() {
        return !!storage.isLogin;
    }
}
