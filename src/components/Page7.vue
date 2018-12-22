<template>
  <slider class="background">
    <div :class="[isActivePage ? 'xd-active':'','section']">
      <div class="xd-section_1">
        <div>你一共收到来自先导出行</div>
        <div>
          送来的
          <b>{{data.coupon_num}}</b>
          个红包总价值
          <b>{{data.reduce_cost}}</b>元
        </div>
        <div>
          <b>{{data.Less_ten_num}}</b>次花费不到十元便抵达目的地
        </div>
      </div>
      <div class="xd-section_2">
        <p>______</p>
        <div>既不让你挤公交与地铁于人潮</div>
        <div>又不让你置身于黑夜“顺风”</div>
        <div>只想做你出行的省钱好帮手</div>
      </div>
    </div>
  </slider>
</template>
<script>
export default {
  props: ['currentPage', 'data'],
  computed: {
    isActivePage() {
      return this.currentPage == 7
    },
  },
}
</script>
<style lang="scss" scoped>
.background {
  background-image: url('../assets/images/7.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
  color: #fff;
}

.section {
  margin-top: 30%;
  margin-left: 6.5%;
  width: 53%;
  // font-size: .8rem;
}

.xd-section_1 {
  opacity: 0;
  // line-height: 0.6rem;
}

.xd-section_2 {
  opacity: 0;
  line-height: 0.8rem;
}

.xd-section_1 p:last-child {
  -webkit-margin-after: 0;
}

.xd-section_2 p {
  -webkit-margin-before: 0;
  // -webkit-margin-after: 0.6em;
}

.xd-section_2 div {
  font-size: 0.7rem;
}

.xd-active .xd-section_1 {
  opacity: 1;
  -webkit-transition: all 0.5s ease-in 0.6s;
}

.xd-active .xd-section_2 {
  opacity: 1;
  -webkit-transition: all 0.5s ease-in 1.2s;
}
</style>

