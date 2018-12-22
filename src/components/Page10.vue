<template>
  <slider class="background">
    <div :class="[isActivePage ? 'xd-active':'','section']">
      <div class="xd-section_1">
        <div>你共完成xx笔订单</div>
        <div>共计用车xx小时</div>
        <div>总消费xx元</div>
        <div>超过了xx的用户</div>
        <div>相当于为城市减少了xx千克</div>
        <div>二氧化碳，种植了xx棵树木</div>
        <div>______</div>
      </div>
      <div class="xd-section_2 small-font">
        <div>你的每次出行都在为我们</div>
        <div>生活的家园</div>
        <div>守护多一片碧水蓝天</div>
        <div>而我</div>
        <div>更喜欢那个保护车车的你</div>
        <div>而保护车车的你，正在保护地球</div>
      </div>
    </div>
  </slider>
</template>
<script>
export default {
  props: ['currentPage'],
  computed: {
    isActivePage() {
      return this.currentPage == 10
    },
  },
}
</script>
<style lang="scss" scoped>
.background {
  background-image: url('../assets/images/10.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
}
.section {
  margin-top: 6%;
  margin-left: 10%;
  width: 53%;
  // line-height: 1.1rem;
}

.xd-section_1 {
  opacity: 0;
}

.xd-section_2 {
  opacity: 0;
}

.xd-active .xd-section_1 {
  opacity: 1;
  -webkit-transition: all 0.5s ease-in 0.6s;
}

.xd-active .xd-section_2 {
  opacity: 1;
  -webkit-transition: all 0.5s ease-in 1.2s;
}

.small-font {
  font-size: 0.6rem;
}
</style>

