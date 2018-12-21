import Vue from 'vue'

import App from './App.vue'

import './styles/index.scss'
import 'swiper/dist/css/swiper.min.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
