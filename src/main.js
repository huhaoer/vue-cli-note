import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

Vue.config.productionTip = false


// 路由元信息,全局守卫在进行判断是否需要登录
// 全局守卫,传递的参数是一个函数,函数的参数也是to,from,next
router.beforeEach((to,from,next) => {
    // 判断是否含有登录标记
    const needLoginFlag = to.matched.some((item) => {//数组中只要含有一个有meta和login为true的项,就表明要登陆
        return item.meta && item.meta.login
    })
    // 需要登录
    if (needLoginFlag) {
      // 判断是否已经登录
      const isLogin = document.cookie.includes('login=true');//判断缓存是否有登录记录
      if (isLogin) {
        next();
        return;
      }
      
      //点击需要登录按钮就跳转到登录页面
      const askLoginFlag = window.confirm('请问是否需要登录呢?');
      if (askLoginFlag) {
        next('/Login');//next()传递路径,满足条件直接跳转
      }
      return;
    }
    next();
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
