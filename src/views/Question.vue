<template>
  <div class="question">
    问题:{{question}}
    <button @click="handleClick" v-show="questionFlag">下一个</button>
  </div>
</template>

<script>
export default {
    // 导航守卫(钩子函数) 在路由更新时执行该函数
    beforeRouteUpdate(to,from,next) {
        const id = to.params.id;
        this.getData(id);//调用获取数据方法
        next();
    },
  // 生命函数获取id值
  mounted() {
      const id = this.$route.params.id;
      this.getData(id);
  },
  data() {
    return {
      question: "", //当前要展示的问题
      questionId: null, //当前传入进来的动态路由携带的id值
      questionFlag: true,//判断是否显示下一个按钮
      questionList: [
        {
          questionId: 1,
          questionText: "到底什么是es6中的class(类)?怎么实现class(类)?"
        },
        {
          questionId: 2,
          questionText:
            "什么是es6中的箭头函数?与普通函数有什么区别?到底该不该使用箭头函数?"
        },
        {
          questionId: 3,
          questionText: "什么是es6的解构赋值?每次会创建一个对象嘛?会增加GC的负担嘛?"
        }
      ]
    };
  },

  methods: {
    handleClick() {
        this.$router.push({
            name:'question',
            params:{
                id:this.questionId + 1//点击传入下一个展示页面路由的参数
            }
        })
    },

    //   获取当前动态路由的id参数
    getData(id) {
        // 找出questionList的每一项中的questionId等于传入进来的id值,就返回他的索引值
        var index = this.questionList.findIndex(item => {
            return item.questionId === id;
        })
        // 判断不为-1的话 表明数组存在该项
        if (index != -1) {
            this.question = this.questionList[index].questionText;
            this.questionId = id;
        }else{//判断为-1的话 表明传入的id值在数组中不存在,超出了问题数量
            this.question = '没有更多问题了。';
            this.questionFlag = false;
        }
    }
  }
};
</script>