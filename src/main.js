import Vue from 'vue'

import App from './App.vue'
import Slider from './components/Slider.vue'

import './styles/index.scss'
import 'swiper/dist/css/swiper.min.css'

Vue.component('Slider', Slider)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
