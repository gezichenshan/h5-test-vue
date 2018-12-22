import Vue from 'vue'

import App from './App.vue'
import Slider from './components/Slider.vue'
import Mint from 'mint-ui'

import './styles/index.scss'
import 'swiper/dist/css/swiper.min.css'
import 'mint-ui/lib/style.css'

Vue.component('Slider', Slider)

Vue.use(Mint)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
