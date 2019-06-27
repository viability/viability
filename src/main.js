import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueSelect from 'vue-select'

import { routes } from "./routes";

Vue.config.productionTip = false;

Vue.use(VueRouter);

Vue.component('v-select', VueSelect);

export var bus = new Vue();

const router = new VueRouter({
  mode: 'history',
  routes: routes
});

Vue.directive('decorate-title', {
  // eslint-disable-next-line
  bind(el, binding, vnode) {
    let via = binding.value.substring(0, binding.value.indexOf("@") + 1);
    let bility = binding.value.substr(binding.value.indexOf("@") + 1);

    let spanVia = document.createElement('span');
    let textContent = document.createTextNode(via);
    spanVia.appendChild(textContent);

    let spanBility = document.createElement('span');
    textContent = document.createTextNode(bility);
    spanBility.appendChild(textContent);
    spanBility.style.fontWeight = 'bold';
    spanBility.style.fontStyle = 'italic';

    el.appendChild(spanVia).appendChild(spanBility);
  }
});

new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app');
