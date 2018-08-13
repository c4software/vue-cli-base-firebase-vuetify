import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import {i18n} from './i18n'
import router from "./router";
import config from "./config";
import store from "./store";
import {listenForAuthChange} from "./helpers/firebase";
import './plugins/vuetify'
import './plugins/firebase'

Vue.config.productionTip = config.tip;

new Vue({
    render: h => h(App),
    router,
    store,
    i18n,
    created: () => {
        listenForAuthChange()
    }
}).$mount('#app');
