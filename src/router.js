
import Vue from 'vue'//引入vue
import Router from 'vue-router'//引入router
import Home from './views/Home.vue'//引入Home组件
Vue.use(Router);//使用Router  在vue实例上会挂载 $router方法 和$route属性

export default new Router({
  mode: 'history',//设置历史模式,路径没有#  还有hash模式#
  // routerLinkExactActive:'exact',//配置完全匹配的路由显示的类名
  linkActiveClass:'active',//配置包含路径的路由显示的类名
  routes: [//路由写在里面,一个对象就是一个路由
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/learn',
      name: 'learn',
      component: () => import('./views/Learn.vue')//懒加载,在用到该路由时才加载这个组件
    },
    {
      path:'/student',
      name:'student',
      component:() => import('./views/Student.vue'),
      //对学生页进行验证登录   储存路由标识,表明该路由路径需要登陆后才能访问
      meta:{
        login: true//需要登陆
      }
    },
    {
      path:'/about',
      name:'about',
      component:() => import('./views/About.vue')
    },
    {
      path:'/community',
      name:'community',
      component:() => import('./views/Community.vue'),
      // 社区页进行验证 路由元信息
      meta:{
        login: true
      },
      redirect: '/community/academic',//进入community时,跳转到academic页面
      children:[//嵌套子路由
        {
          path:'academic',
          name:'academic',
          component:() => import('./views/Academic.vue')
        },
        {
          path: 'download',
          name: 'download',
          component: () => import('./views/Download.vue')
        },
        {
          path: 'personal',
          name: 'personal',
          component: () => import('./views/Personal.vue')
        }
      ]
    },
    {
      path:'/question:id',
      name:'question',
      component: () => import('./views/Question.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path:'/notFound',
      name:'notFound',
      component: () => import('./views/NotFound.vue')
    },
    {
      path: '*',
      redirect(to) {
        if (to.path === '/') {
          return '/home'
        } else {
          return '/notFound';
        }
      }
    }
  ]
})






// import Vue from 'vue'
// import Router from 'vue-router'
// import Home from './views/Home.vue'

// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: Home
//     },
//     {
//       path: '/about',
//       name: 'about',
//       // route level code-splitting
//       // this generates a separate chunk (about.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
//     }
//   ]
// })
