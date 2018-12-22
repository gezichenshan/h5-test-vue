<template>
  <div>
    <div class="swiper-container" style="background:#e88a63" v-if="stage===0">
      <div class="xd-loading" v-if="loading">
        <mt-spinner color="#26a2ff"></mt-spinner>
      </div>
      <div class="xd-toast"></div>
      <div class="swiper-wrapper">
        <Login :login="login"/>
      </div>
    </div>

    <div class="swiper-container" style="background:#e88a63" v-if="stage===1">
      <div class="swiper-wrapper">
        <page2/>
      </div>
    </div>

    <div class="swiper-container" style="background:#e88a63" v-if="stage===2">
      <div class="swiper-wrapper">
        <page1/>
        <page3 :currentPage="currentPage" :data="componentData"/>
        <page4 :currentPage="currentPage" :data="componentData"/>
        <page5 :currentPage="currentPage" :data="componentData"/>
        <page6 :currentPage="currentPage" :data="componentData"/>
        <page7 :currentPage="currentPage" :data="componentData"/>
        <page8 :currentPage="currentPage" :data="componentData"/>
        <page9 :currentPage="currentPage" :data="componentData"/>
        <page10 :currentPage="currentPage" :data="componentData"/>
        <page11 :currentPage="currentPage" :data="componentData" :name="username"/>
      </div>
    </div>

    <div class="pub-passdown" v-if="isLogin&&stage!==1">
      <img src="../assets/images/arrow-up.png" width="100%">
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper/dist/js/swiper.js'
import request from '../api/request'
import Login from './Login'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import Page4 from './Page4'
import Page5 from './Page5'
import Page6 from './Page6'
import Page7 from './Page7'
import Page8 from './Page8'
import Page9 from './Page9'
import Page10 from './Page10'
import Page11 from './Page11'
import { Toast } from 'mint-ui'
const STAGE_LOGIN = 0
const STAGE_NO_INFO = 1
const STAGE_PASS = 2
export default {
  data() {
    return {
      stage: STAGE_LOGIN,
      loading: false,
      isLogin: false,
      currentPage: 0,
      componentData: {},
      username: '',
    }
  },
  components: {
    Login,
    Page1,
    Page2,
    Page3,
    Page4,
    Page5,
    Page6,
    Page7,
    Page8,
    Page9,
    Page10,
    Page11,
  },
  methods: {
    login: function(username, password) {
      this.loading = true
      request(username, password)
        .then(res => {
          const { resultCode, msg } = res.data
          if (resultCode) {
            if (resultCode === '0000') {
              this.username = username
              this.isLogin = true
              //用户存在系统中
              this.stage = STAGE_PASS
              this.componentData = res.data.statisticsDate
              setTimeout(() => {
                this.initSlider()
              }, 500)
            } else if (resultCode === '4444' || resultCode === '2222') {
              //密码错误
              Toast({
                message: '账号密码错误',
                duration: 3000,
              })
            } else if (resultCode === '5555') {
              //没查到该用户信息
              this.stage = STAGE_NO_INFO
            }
          } else {
            Toast({
              message: msg,
              duration: 5000,
            })
          }
          this.loading = false
        })
        .catch(error => {
          throw error
        })
    },
    initSlider() {
      let self = this
      new Swiper('.swiper-container', {
        direction: 'vertical', // 垂直切换选项
        effect: 'coverflow',
        speed: 400,
        fade: {
          crossFade: false,
        },
        coverflow: {
          rotate: 100,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: false, // do disable shadows for better performance
        },
        flip: {
          limitRotation: true,
          slideShadows: false, // do disable shadows for better performance
        },
        watchSlidesProgress: true,
        on: {
          progress: function(progress) {
            // console.log(progress)
            var current = (progress * 10).toString().split('.')[0]
            self.currentPage = parseInt(current) + 2 //加入2让currentPage和num.vue的num匹配
          },
        },
      })
    },
  },
  mounted() {
    this.initSlider()
  },
}
</script>
<style>
.swiper-container {
  height: 100vh;
}
.slider-image-wrapper {
  display: flex;
  justify-content: center;
}
.slider-content {
  width: 100%;
  height: 100%;
}
.xd-loading {
  position: absolute;
  width: 10%;
  left: 45%;
  bottom: 50%;
  z-index: 999;
}

.pub-passdown {
  position: absolute;
  width: 10%;
  left: 45%;
  bottom: 4%;
  z-index: 999;
  -webkit-animation-name: passdown;
  -webkit-animation-timing-function: ease;
  -webkit-animation-duration: 0.8s;
  -webkit-animation-iteration-count: infinite;
}
@keyframes passdown {
  0% {
    bottom: 5%;
  }
  50% {
    bottom: 3.2%;
  }
  100% {
    bottom: 5%;
  }
}
</style>