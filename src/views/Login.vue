<template>
    <div class="login">
        <button @click="handleClick">点我登录哦~</button>
    </div>
</template>
<script>
export default {
    methods:{
        // 点击登录按钮进行设置缓存
        handleClick() {
            var expires = 900 * 24 * 60 * 60 * 1000;//900天后的毫秒数
            var date = new Date(+new Date() + expires);
            // console.log(date)
            document.cookie = `login=true;expires=${date}`;//设置缓存
            // document.cookie = `login4=true;expires=${date.toUTCString(expires)}`;//设置缓存
        }
    }
}
</script>

<style scoped>
    button{
        background-color: #abcdef;
        border: none;
        outline: none;
        width: 100px;
        height:40px;
        color: #fff;
        font-size: 14px;
        text-align: center;
        line-height: 40px;
        border-radius: 20px;
        margin-top: 40px;
        cursor: pointer;
    }
</style>