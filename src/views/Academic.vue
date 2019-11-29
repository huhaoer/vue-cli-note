<template>
    <div class="academic">
        <ul>
            <!-- 动态路由 -->
            <router-link tag="li" :to="{name: 'question',params:{id:item.questionId}}" v-for="item in questionList"
                :key="item.questionId"
            >
                {{item.questionText}}
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    // 导航守卫(钩子函数)  当路径进入该路由时执行的函数
    beforeRouteEnter(to,from,next) {
        // console.log(this) this为undefined
        // to是当前要进入的路由 /community/academic
        // from是从哪里点击来 /community/download从download点击进来的
        // next可以接收一个函数为参数,获取的是当前的vue实例,可以获取data里面的数据->questionList数据等
        next((vm) => {
            // console.log(vm)
        })
    },
    data() {
        return {
            questionList:[
                {
                    questionId:1,
                    questionText:'到底什么是es6中的class(类)?怎么实现class(类)?'
                },
                {
                    questionId:2,
                    questionText:'什么是es6中的箭头函数?与普通函数有什么区别?到底该不该使用箭头函数?'
                },
                {
                    questionId:3,
                    questionText:'什么是es6的解构赋值?每次会创建一个对象嘛?会增加GC的负担嘛?'
                }
            ]
        }
    }
}
</script>
<style scoped>
    li{
        margin-top: 10px;
        list-style: none;
        cursor: pointer;
    }
</style>