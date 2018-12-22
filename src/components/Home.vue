<template>
  <div class="swiper-container" style="background:#e88a63">
    <div class="swiper-wrapper">
      <page1/>
      <page2/>
      <page3/>
      <page4/>
      <page5/>
      <page6/>
      <page7/>
      <page8/>
      <page9/>
      <page10/>
      <page11/>
    </div>
  </div>
</template>

<script>
// import Swiper from '../assets/js/swiper.min.js'
import Swiper from 'swiper/dist/js/swiper.js'
// import Slider from './Slider'
import request from '../api/request'
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
export default {
  data() {
    return {}
  },
  components: {
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
  mounted() {
    // request().then(res => {
    //   console.log(res)
    // })
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


      <!-- <slider>
        <img src="../assets/images/1.jpg" class="slider-content">
        <div style="color:#fff;position:absolute;left:0;top:0;font-size:16px;">12312312312</div>
      </slider>-->
      <!-- <slider class="slider-image-wrapper">
      </slider>
      <slider class="slider-image-wrapper">
      </slider>
      <slider class="slider-image-wrapper">
      </slider>
      <slider class="slider-image-wrapper">
      </slider>
      <slider class="slider-image-wrapper">
      </slider>
      <slider class="slider-image-wrapper">
      </slider>
      <slider class="slider-image-wrapper">
      </slider>
      <slider class="slider-image-wrapper">
      </slider>
      <slider class="slider-image-wrapper">
      </slider>
      <slider class="slider-image-wrapper">
      </slider>-->