<template>
  <div class="swiper-container" style="background:#e88a63">
    <div class="swiper-wrapper">
      <slider>
        <img src="../assets/images/1.png" class="slider-content">
        <img data-src="../assets/images/1.png" class="swiper-lazy">
      </slider>
      <slider class="slider-image-wrapper">
        <img src="../assets/images/3.jpg" class="slider-content">
      </slider>
      <slider class="slider-image-wrapper">
        <img src="../assets/images/4.png" class="slider-content">
      </slider>
      <slider class="slider-image-wrapper">
        <img src="../assets/images/5.png" class="slider-content">
      </slider>
      <slider class="slider-image-wrapper">
        <img src="../assets/images/6.png" class="slider-content">
      </slider>
      <slider class="slider-image-wrapper">
        <img src="../assets/images/7.png" class="slider-content">
      </slider>
      <slider class="slider-image-wrapper">
        <img src="../assets/images/8.png" class="slider-content">
      </slider>
      <slider class="slider-image-wrapper">
        <img src="../assets/images/9.png" class="slider-content">
      </slider>
      <slider class="slider-image-wrapper">
        <img src="../assets/images/10.png" class="slider-content">
      </slider>
      <slider class="slider-image-wrapper">
        <img src="../assets/images/11.png" class="slider-content">
      </slider>
      <slider class="slider-image-wrapper">
        <img src="../assets/images/12.png" class="slider-content">
      </slider>
    </div>
  </div>
</template>

<script>
// import Swiper from '../assets/js/swiper.min.js'
import Swiper from 'swiper/dist/js/swiper.js'
import Slider from './Slider'
import request from '../api/request'
export default {
  data() {
    return {}
  },
  components: { Slider },
  mounted() {
    request().then(res => {
      console.log(res)
    })
    var mySwiper = new Swiper('.swiper-container', {
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
    })
  },
}
</script>
<style>
.swiper-container {
  /* width: 600px; */
  /* width:100vw; */
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
</style>
