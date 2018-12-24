<template>
  <slider class="background">
    <!-- <img src="../assets/images/1.jpg" class="slider-content"> -->
    <!-- <div style="color:#fff;position:absolute;left:0;top:0;font-size:16px;">12312312312</div> -->
    <div class="search-wrap" @click="toFind()">
      <Button>去探索</Button>
    </div>
  </slider>
</template>
<script>
import Button from './Button.vue'
export default {
  components: { Button },
  methods: {
    toFind() {
      window.location.href =
        'https://a.app.qq.com/o/simple.jsp?pkgname=com.cpih.zulin&fromcase=40002'
    },
  },
}
</script>
<style lang="scss" scoped>
.background {
  background-image: url('../assets/images/2.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
}
.search-wrap {
  position: absolute;
  top: 30rem;
  left: 38%;
}
</style>

