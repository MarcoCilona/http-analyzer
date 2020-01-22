import Vue from 'vue';
import App from './App.vue';

import './styles/main.scss';

import '@fortawesome/fontawesome-free/js/all.min';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
