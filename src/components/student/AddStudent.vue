<template>
    <div class="add-student">
        <div>添加学生</div>
        <div>姓名: <input type="text" v-model="name"></div>
        <div>年龄: <input type="text" v-model="age"></div>
        <div><button @click="handleClick">添加</button></div>
        {{person}}
        <hr />
    </div>
</template>

<script>
import { mapState,mapGetters,mapMutations,mapActions } from 'vuex';
export default {
    data() {
        return {
            name: '',
            age: null
        }
    },
    methods: {
        // 获取mapMutations的函数
        // ...mapMutations(['changeStudentList']),//直接使用

        // ...mapMutations({//改名使用
        //     newMethod: 'changeStudentList'
        // }),

        // 获取mapActions异步函数
        ...mapActions(['actionsStudentList']),
        // 点击按钮时将此时输入框的信息传递给store.js里面的state
        handleClick() {
            const tempObj = {
                name: this.name,
                age: this.age,
                id: +new Date()
            }
            // this.$store.state.studentList.push(tempObj);//将传入的数据传递给state里面共享的studentList数组

            // 获取通过mutations改变数据
            // 1.通过$store直接获取
            // this.$store.commit('changeStudentList',tempObj);//获取mutations的方法,且后面是传递要改变的数据
            // this.$store.commit('changeStudentList',{tempObj,name:'新数据'});//获取mutations的方法,且后面是传递要改变的数据

            // 2.通过mapMutations获取  是一个方法,放在methods里面,直接使用的值放在computed里面
            // this.newMethod({tempObj,name:'杉杉衫'});//执行mutations函数,改变数据

            //获取actions来执行mutations
            // 1.$store直接获取
            // this.$store.dispatch('actionsStudentList',{tempObj,name:'胡豪豪'});//通过执行actions的changeStudentList方法,传递数据

            // 2.通过mapActions获取
            this.actionsStudentList({tempObj,name:'哈哈哈'})
        },
            
    },
    computed:{
        // 直接引用state里面的数据也许会和组件内data数据重名,首先使用data的数据
        // 也会造成数据混乱,所以重名的数据要在mapState里面传入对象形式,然后将重名数据改名 
        ...mapState(['sex']),
        ...mapState({
            storeName: (state) => {
                return state.name
            }
        }),
        ...mapState({
            storeAge:state => {
                return state.age
            }
        }),
        ...mapGetters(['person']),//获取getters里面的person

    }
}
</script>

<style scoped>
    div{
        margin-bottom: 15px;
    }
</style>