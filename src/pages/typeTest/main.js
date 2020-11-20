import Vue from "vue";
import App from "./App.vue";
import router from "../../router/type-test";
import store from "../../store/type-test";
import VueCountdown from '@chenfengyuan/vue-countdown';

Vue.component(VueCountdown.name, VueCountdown);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
