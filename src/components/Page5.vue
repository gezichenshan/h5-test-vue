<template>
  <slider class="background">
    <!-- <img src="../assets/images/1.jpg" class="slider-content"> -->
    <div :class="[isActivePage ? 'xd-active':'','section']">
      <div class="xd-section_1">
        <p>开车最久的一次</p>
        <p>你开了{{data.longest_order_time}}分钟</p>
        <p>消费了{{data.longest_pay_cost}}元</p>
      </div>
      <div class="xd-section_2">
        <p>______</p>
        <span>开启一段优质的新生活总是意义非凡</span>
      </div>
    </div>
  </slider>
</template>
<script>
export default {
  props: ['currentPage', 'data'],
  computed: {
    isActivePage() {
      return this.currentPage == 5
    },
  },
}
</script>
<style lang="scss" scoped>
.background {
  background-image: url('../assets/images/5.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
}

.section {
  margin-top: 17%;
  margin-left: 30%;
  width: 53%;
  // font-size: 0.8rem;
}

.xd-section_1 {
  opacity: 0;
  line-height: 0.6rem;
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
  font-size: 0.7rem;
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

