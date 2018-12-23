<template>
  <slider class="background">
    <img
      src="../assets/images/share-modal.png"
      class="share-image"
      @click="share()"
      v-if="popupVisible"
    >
    <mt-popup v-model="popupVisible"></mt-popup>
    <div :class="[isActivePage ? 'xd-active':'','section']">
      <div class="xd-section_1">
        <div>心爱的{{name}}</div>
        <div>你是第{{data.user_index}}位“导主”</div>
        <div>_________</div>
      </div>
      <div class="xd-section_2 small-font">
        <div>这一年感谢有你的陪伴</div>
        <div>2019</div>
        <div>我们会带给你更多的惊喜</div>
        <div>继续往前开</div>
        <div>你就会知道</div>
      </div>
      <div class="xd-section_3">
        <div>
          <img src="../assets/images/review.png" width="50%" @click="callReview()">
        </div>
        <div>
          <img
            src="../assets/images/share.png"
            width="50%"
            style="margin:1rem 0 0 4rem"
            @click="share()"
          >
        </div>
      </div>
    </div>
  </slider>
</template>
<script>
var wx = require('weixin-js-sdk')
wx.config({
  debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
  appId: 'wxfe609faad5da2548', // 必填，公众号的唯一标识
  timestamp: '', // 必填，生成签名的时间戳
  nonceStr: '', // 必填，生成签名的随机串
  signature: '', // 必填，签名
  jsApiList: [], // 必填，需要使用的JS接口列表
})
export default {
  props: ['currentPage', 'data', 'name', 'review'],
  data() {
    return {
      popupVisible: false,
    }
  },
  computed: {
    isActivePage() {
      return this.currentPage == 12
    },
  },
  methods: {
    callReview() {
      this.review()
    },
    share() {
      this.popupVisible = !this.popupVisible
    },
  },
}
</script>
<style lang="scss" scoped>
.background {
  background-image: url('../assets/images/11.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
}
.section {
  margin-top: 16%;
  margin-left: 10%;
  width: 53%;
  color: #fff;
  line-height: 1.2rem;
}

.xd-section_1 {
  opacity: 0;
}

.xd-section_2 {
  opacity: 0;
}

.xd-section_3 {
  opacity: 0;
  margin-top: 1rem;
}
.swiper-slide-active .xd-section_1 {
  opacity: 1;
  -webkit-transition: all 0.5s ease-in 0.6s;
}

.swiper-slide-active .xd-section_2 {
  opacity: 1;
  -webkit-transition: all 0.5s ease-in 1.2s;
}

.swiper-slide-active .xd-section_3 {
  opacity: 1;
  -webkit-transition: all 0.5s ease-in 1.8s;
}

.small-font {
  font-size: 0.6rem;
}
.mint-popup {
  background: transparent;
  transition: none;
}
.share-image {
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 9999;
}
</style>

