<template>
    <div class="show-student">
        <div>学生列表</div>
        <ul>
            <li v-for="item in studentList"
                :key="item.id"
            >
                姓名：{{ item.name }}
                年龄：{{ item.age }}
            </li>
        </ul>
        <hr>
        <ul>
            <li v-for="(item,index) in newPersonList"
                :key="index"
            >
                {{item}}
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState,mapGetters } from 'vuex';//从vuex中引入state对象
export default {
    computed:{
        // mapState(['name','age','sex'])是一个对象,相当于计算样式里,每一个显示的变量都是一个函数,用...运算符刚好展开每一个变量当作计算样式
        ...mapState(['studentList']),
        ...mapGetters(['newPersonList'])//获取getters里面的newPersonList计算属性,时时改变,是一个数组
    }
}
</script>

<style scoped>
    div{
        margin-bottom: 15px;
    }
    li{
        list-style: none;
        margin: 10px;
        color:red;
    }
</style>