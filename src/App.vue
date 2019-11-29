<template>
  <div id="app">
    <div id="nav">
      <div class="logo" @click="handleClick">@layoung</div><!-- 绑定事件,点击跳转到首页 -->
      <ul>
        <router-link tag="li" to="/home">Home</router-link>
        <router-link tag="li" to="/learn">Learn</router-link>
        <router-link tag="li" to="/student">Student</router-link>
        <router-link tag="li" :to="{path:'/about'}">About</router-link>
        <router-link tag="li" :to="{name:'community'}">Community</router-link>
      </ul>
    </div>
    <router-view class="view" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld';
export default {
  methods: {
    handleClick() {
      //vue实例使用了router,调用$router的方法
      this.$router.push('/home')//点击后跳转到/home路径,可以返回
      // this.$router.replace('/home')//用/hemo路径替换当前路径
    }
  },
}
</script>

<style scoped>
#nav {
  width: 100%;
  height: 100px;
  background-color: aquamarine;
  display: flex;
  font-size: 14px;
}
ul{
  display: flex;
}
.logo {
  width: 700px;
  height: 100%;
  /* background-color: red; */
  text-align: center;
  line-height: 100px;
  cursor: pointer;
}
li {
  list-style: none;
  width: 100px;
  height: 100px;
  /* background-color: blue;  */
  margin-left: 30px;
  text-align: center;
  line-height: 100px;
  cursor: pointer;
}
.active {
  color: #fff;
  font-weight: bold;
}
.view {
  padding-left: 250px;
}
</style>
