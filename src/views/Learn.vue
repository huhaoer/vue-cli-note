<template>
    <div class="learn">
        <!-- 无命名空间 state和getters -->
        课程:{{$store.state.learn.courseName}}
        <br />
        价格:{{$store.getters.coursePrice}}
        <br />
        <button @click="handleClick">改变价格</button>
        <hr />

        <!-- 有命名空间 state和getters -->
        课程:{{$store.state.learn.courseName}}
        <br />
        课程:{{price}}{{coursePrice}}
        <br />
        价格：{{$store.getters['learn/coursePrice']}}
        <br />
        <button @click="handleClick">改变价格</button>
        
    </div>
</template>

<script>
import { mapState,mapGetters,mapMutations,mapActions } from 'vuex';
export default {
    computed:{
        // 通过mapState获取有命名空间数据
        ...mapState('learn',['price']),
        // 通过mapGetters获取有命名空间数据
        ...mapGetters('learn',['coursePrice'])
    },
    methods:{
        // 通过mapMutations获取有命名空间数据
        ...mapMutations('learn',['mutationsChangePrice']),
        // 通过mapActions获取有命名空间数据
        ...mapActions('learn',['actionsChangePrice']),
        handleClick() {
            // this.mutationsChangePrice({price:3000})
            this.actionsChangePrice({price:65656})
            // 无命名空间mutations和actions
            // 调用mutations改变state里面的数据
            // this.$store.commit('changePrice',{price:1000});
            // 调用actions异步改变
            // this.$store.dispatch('actionsChangePrice',{price:1000})


            // 有命名空间 mutations和actions  需要在commit和dispatch函数前面添加模块名
            // this.$store.commit('learn/mutationsChangePrice',{price:2000})
            // this.$store.dispatch('learn/actionsChangePrice',{price:5000})
            
        }
    }
}
</script>
<style scoped>
    button{
        margin-top: 20px;
    }
</style>

