import Vue from 'vue';
import App from './App.vue';
import twoUI from './../packages/index';
Vue.config.productionTip = false;

Vue.use(twoUI);

new Vue({
  render: h => h(App),
}).$mount('#app')
