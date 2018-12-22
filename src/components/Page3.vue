<template>
  <slider class="background">
    <div :class="[isActivePage ? 'xd-active':'','section']">
      <div class="xd-section_1">
        <p>你共完成xx笔订单</p>
        <p>XX年XX月XX日</p>
        <p>于XX网点</p>
      </div>
      <div class="xd-section_2">
        <p>我们见面了</p>
        <p>你怯生生的</p>
        <p>却温暖的靠近</p>
        <p>______</p>
        <p>让我只想出现在你的每一天</p>
      </div>
    </div>
  </slider>
</template>
<script>
export default {
  props: ['currentPage'],
  computed: {
    isActivePage() {
      return this.currentPage == 3
    },
  },
}
</script>
<style lang="scss" scoped>
.background {
  background-image: url('../assets/images/3.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
}

.section {
  margin-top: 40%;
  margin-left: 10%;
  width: 53%;
  color: #fff;
  line-height: 1rem;
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
</style>

