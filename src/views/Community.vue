<template>
  <div class="community">
    <ul class="nav">
      <router-link tag="li" to="/community/academic">学术讨论</router-link>
      <router-link tag="li" to="/community/download">资源下载</router-link>
      <router-link tag="li" to="/community/personal">个人中心</router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<style scoped>
    .nav{
        /* width: 300px;
        height: 60px; */
        /* background-color: red; */
        padding: 0;
        display: flex;
        /* justify-content: flex-start; */
    }
    .nav li{
        list-style: none;
        text-align: center;
        line-height: 35px;
        width: 100px;
        margin-left: 30px;
        height: 35px;
        background-color: blue;
        border: 1px solid #ccc;
        color: #fff;
        cursor: pointer;
    }
    .active{
        font-weight: bold;
    }
</style>
