<template>
  <div class="swiper-slide">
    <slot></slot>
    <div class="pub-passdown">
      <img src="../assets/images/arrow-up.png" width="100%">
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss">
.background {
  position: relative;
}
.pub-passdown {
  position: absolute;
  width: 10%;
  left: 45%;
  bottom: 4%;
  -webkit-animation-name: passdown;
  -webkit-animation-timing-function: ease;
  -webkit-animation-duration: 0.8s;
  -webkit-animation-iteration-count: infinite;
}
@keyframes passdown {
  0% {
    bottom: 5%;
  }
  50% {
    bottom: 3.2%;
  }
  100% {
    bottom: 5%;
  }
}
</style>

