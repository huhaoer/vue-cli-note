import Vue from 'vue';
import Vuex from 'vuex';
import student from './student';//引入store文件夹下分模块的student模块文件
import learn from './learn';//引入store文件夹下分模块的learn模块文件
Vue.use(Vuex)

export default new Vuex.Store({
    //开启严格模式,vuex数据可以渲染到组件中,但是数据不要再组件中更改,要在vuex中的mutations中更改
  strict:process.env.NODE_ENV != 'production',//判断是开发环境的情况下才开启严格模式
  // modules让vuex状态根据功能分出模块,在src文件夹下创建每一个模块,这里直接引入即可
  modules:{
    student,//student状态模块
    learn//learn状态模块
  }
})
