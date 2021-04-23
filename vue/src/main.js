import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Cloudbase from "@cloudbase/vue-provider";
// import store from './store'

Vue.use(ElementUI)
Vue.config.productionTip = false

Vue.prototype.$axios = axios


window._tcbEnv = window._tcbEnv || {};

export const envId = window._tcbEnv.TCB_ENV_ID;
export const region = window._tcbEnv.TCB_REGION;

Vue.config.productionTip = false;

Vue.use(Cloudbase, {
	env: 'chengqige-7gunki87efeca981',
	region: region
});

new Vue({
	router,
	render: h => h(App)
}).$mount("#app");
