import Vue from 'vue'
import App from './App.vue'

Vue.config.ignoredElements = [
  'button-dropdown'
];

new Vue({
  el: '#app',
  render: h => h(App)
})
