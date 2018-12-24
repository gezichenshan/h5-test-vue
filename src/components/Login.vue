<template>
  <slider class="background">
    <div class="xd-page-container">
      <div class="xd-login">
        <input
          type="text"
          class="ant-input"
          placeholder="用户名"
          v-model="username"
          style="margin-top:5px;color:#fff;caret-color: #fff;"
        >
        <input
          type="password"
          class="ant-input"
          placeholder="密码"
          v-model="password"
          style="margin-top:5px;color:#fff;caret-color: #fff;"
        >
        <div>
          <mt-button
            type="primary"
            style="margin-top:5px;width:10rem;background:#e68a67"
            @click="submit"
          >登录</mt-button>
          <a
            style="color:#fff;margin-top:1rem;margin-left:1rem"
            href="https://a.app.qq.com/o/simple.jsp?pkgname=com.cpih.zulin&fromcase=40002"
          >新用户？</a>
        </div>
      </div>
    </div>
  </slider>
</template>
<script>
import $ from 'jquery'
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
      // let username = '13825662216'
      // let password = '654321'
      // this.login(username, password)
      this.login(this.username, this.password)
    },
  },
  mounted() {
    $('input').blur(function() {
      $(window).scrollTop(0, 0) //prevent virtual keyboard push the content up
    })
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
  flex-direction: column;
  position: relative;
  // background: #f00;
  // justify-content: center;
  align-items: center;
}
.xd-login {
  position: absolute;
  top: 18rem;
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

