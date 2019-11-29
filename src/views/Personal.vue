<template>
    <div class="personal">
        姓名:<input type="text" v-model="name">
        <button @click="handleClick">提交</button>
    </div>
</template>
<script>
export default {
    // 导航守卫(钩子函数)
    // to 去到的那个路径信息  from从哪个路径来  next是否跳转,执行就跳转,不执行就不跳转
    beforeRouteLeave(to,from,next) {//离开当前路由时执行的函数
            // 输入框有值就询问是否跳转
        if (this.name) {
            const flag = window.confirm('确认离开吗?');
            if(flag){
                this.name = ''
                next();
            }
        }else{
            // 输入框为空就跳转
            next();
        }
    },
    data() {
        return {
            name : ''
        }
    },
    methods: {
        handleClick() {
            this.name = ''
        }
    }
}
</script>
<style scoped>
    button{
        margin-left: 20px;
    }
</style>