<template>
    <div class="student">
        <add-student />
        <show-student />
    </div>
</template>

<script>
// 引入组件
import addStudent from '@/components/student/AddStudent.vue';
import ShowStudent from '@/components/student/ShowStudent.vue';
export default {
    components:{
        addStudent,
        ShowStudent
    }
}
</script>