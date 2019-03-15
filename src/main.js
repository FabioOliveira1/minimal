import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

const crypto = require('crypto')
console.log('crypto', crypto)
console.log('crypto.scryptSync', crypto.scryptSync)

new Vue({
  render: h => h(App),
}).$mount('#app')
