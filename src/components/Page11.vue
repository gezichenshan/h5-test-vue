<template>
  <slider class="background">
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
    </div>
  </slider>
</template>
<script>
export default {
  props: ['currentPage', 'data', 'name'],
  computed: {
    isActivePage() {
      return this.currentPage == 12
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

