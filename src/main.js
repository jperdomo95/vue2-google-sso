import Vue from 'vue'
import GSignInButton from 'vue-google-signin-button'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(GSignInButton)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
