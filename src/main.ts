import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify';
import store from "@/plugins/vuex";
import router from "@/plugins/vuerouter";
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
