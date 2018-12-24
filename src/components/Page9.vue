<template>
  <slider class="background">
    <div class="title">
      <div>先导出行</div>
      <div>大家族</div>
    </div>
    <div :class="[isActivePage ? 'xd-active':'','section']">
      <div class="xd-section_1">
        <div>绿色出行</div>
      </div>
      <div class="xd-section_2 middle-font">
        <div>你共邀请{{data.inviter_num}}人加入先导出行大家族</div>
        <div>你也很愿意分享这份绿色便利给Ta人</div>
        <div></div>

        <div>轻微的一个小举动</div>
        <div>就给身边的朋友打开了一片新天地</div>
        <div>更见证了湖南共享汽车第一品牌的成长</div>
      </div>
    </div>
  </slider>
</template>
<script>
export default {
  props: ['currentPage', 'data'],
  computed: {
    isActivePage() {
      return this.currentPage == 9
    },
  },
}
</script>
<style lang="scss" scoped>
.background {
  background-image: url('../assets/images/9.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
}
.title {
  display: flex;
  flex-direction: column;
  color: #fff;
  font-size: 2rem;
  justify-content: center;
  align-items: center;
  // position: absolute;
  // left: 35%;
  margin-top: 10%;
  opacity: 0;
}

.section {
  margin-top: 86%;
  margin-left: 25%;
  // width: 53%;
  font-size: 0.8rem;
  line-height: 1rem;
  position: relative;
}

.xd-section_1 {
  opacity: 0;
  position: absolute;
  top: -3.5rem;
  left: 3.5rem;
  font-size: 1.2rem;
}

.xd-section_2 {
  opacity: 0;
}

.swiper-slide-active .title {
  opacity: 1;
  -webkit-transition: all 0.5s ease-in 0.6s;
}

.swiper-slide-active .xd-section_1 {
  opacity: 1;
  -webkit-transition: all 0.5s ease-in 0.6s;
}

.swiper-slide-active .xd-section_2 {
  opacity: 1;
  -webkit-transition: all 0.5s ease-in 1.2s;
}

.middle-font {
  font-size: 0.7rem;
}
.small-font {
  font-size: 0.6rem;
}
</style>

