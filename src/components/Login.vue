<template>
  <slider class="background">
    <div class="xd-page-container">
      <div class="xd-login">
        <input type="text" class="ant-input" placeholder="请输入用户名" v-model="username">
        <input
          type="password"
          class="ant-input"
          placeholder="请输入密码"
          v-model="password"
          style="margin-top:5px;color:#fff;caret-color: #fff;"
        >
        <mt-button type="primary" style="margin-top:5px;width:10rem" @click="submit">登录</mt-button>
      </div>
    </div>
  </slider>
</template>
<script>
export default {
  props: ['login'],
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    submit() {
      this.login(this.username, this.password)
    },
  },
}
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
.ant-input {
  font-family: 'Chinese Quote', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC',
    'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  font-variant: tabular-nums;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
  position: relative;
  display: inline-block;
  padding: 4px 11px;
  width: 100%;
  height: 50px;
  font-size: 14px;
  line-height: 1.5;
  color: #fff;
  background-color: transparent;
  background-image: none;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
</style>

