<template>
  <slider class="background">
    <div class="xd-page-container">
      <div class="xd-login xd-pub-passdown">
        <span>上滑查看年终账单</span>
      </div>
    </div>
  </slider>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.background {
  background-image: url('../assets/images/1.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
}
.xd-page-container {
  display: flex;
  flex: 1;
  height: 100vh;
  // background: #f00;
  justify-content: center;
  align-items: center;
}
.xd-login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.xd-pub-passdown {
  position: absolute;
  // width: 10%;
  // left: 45%;
  // bottom: 4%;
  color: #fff;
  -webkit-animation-name: passdown;
  -webkit-animation-timing-function: ease;
  -webkit-animation-duration: 0.8s;
  -webkit-animation-iteration-count: infinite;
}
@keyframes passdown {
  0% {
    bottom: 51.8%;
  }
  50% {
    bottom: 50%;
  }
  100% {
    bottom: 51.8%;
  }
}
</style>

