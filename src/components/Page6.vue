<template>
  <slider class="background">
    <div :class="[isActivePage ? 'xd-active':'','section']">
      <div class="xd-section_1">
        <div>在这里一年里，</div>
        <div>你在{{data.take_car_name}}网点取车次数达到了{{data.take_car_num}}次。</div>
        <div>在{{data.take_car_name}}网点还车次数达到{{data.ret_car_num}}次。</div>
      </div>
      <div class="xd-section_2">
        <p>______</p>
        <span>老熟人了，连快递小哥都认识你了哟</span>
      </div>
    </div>
  </slider>
</template>
<script>
export default {
  props: ['currentPage', 'data'],
  computed: {
    isActivePage() {
      return this.currentPage == 6
    },
  },
}
</script>
<style lang="scss" scoped>
.background {
  background-image: url('../assets/images/6.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
}

.section {
  margin-top: 35%;
  margin-left: 10%;
  width: 53%;
  font-size: 0.8rem;
}

.xd-section_1 {
  opacity: 0;
  line-height: 1rem;
}

.xd-section_2 {
  opacity: 0;
  line-height: 0.4rem;
}

.xd-section_1 p:last-child {
  -webkit-margin-after: 0;
}

.xd-section_2 p {
  -webkit-margin-before: 0;
  -webkit-margin-after: 0.8em;
}

.xd-section_2 span {
  font-size: 0.6rem;
}

.swiper-slide-active .xd-section_1 {
  opacity: 1;
  -webkit-transition: all 0.5s ease-in 0.6s;
}

.swiper-slide-active .xd-section_2 {
  opacity: 1;
  -webkit-transition: all 0.5s ease-in 1.2s;
}
</style>

