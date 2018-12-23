<template>
  <slider class="background">
    <div :class="[isActivePage ? 'xd-active':'','section']">
      <div class="xd-section_1">
        <div>转眼间</div>
        <div>湖南这10个城市</div>
        <div class="small-font">长沙、湘潭、株洲、浏阳、益阳</div>
        <div class="small-font">宁乡、衡阳、常德、岳阳、永州</div>
        <div>都出现了先导出行的身影</div>
      </div>
      <div class="xd-section_2">
        <div>你共跨城了{{data.cross_city_num}}次</div>
        <div>常在null驻足</div>
        <div>______</div>
        <div class="small-font">不管是去见心爱的人还是回温暖的家</div>
        <div class="small-font">都觉得又便捷又实惠</div>
      </div>
    </div>
  </slider>
</template>
<script>
export default {
  props: ['currentPage', 'data'],
  computed: {
    isActivePage() {
      return this.currentPage == 8
    },
  },
}
</script>
<style lang="scss" scoped>
.background {
  background-image: url('../assets/images/8.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
}

.section {
  margin-top: 60%;
  margin-left: 5%;
  width: 53%;
  color: #fff;
  font-size: 0.8rem;
  line-height: 1rem;
}

.xd-section_1 {
  opacity: 0;
}

.xd-section_2 {
  opacity: 0;
}

.swiper-slide-active .xd-section_1 {
  opacity: 1;
  -webkit-transition: all 0.5s ease-in 0.6s;
}

.swiper-slide-active .xd-section_2 {
  opacity: 1;
  -webkit-transition: all 0.5s ease-in 1.2s;
}

.small-font {
  font-size: 0.6rem;
}
</style>

