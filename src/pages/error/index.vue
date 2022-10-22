<script setup lang='ts'>
import { ElMessage } from 'element-plus';
import { ref, reactive } from 'vue'

const findUs = ()=>{
    console.log(1);
    ElMessage.info("我们暂时拒绝被联系！")
}
</script>
<template>
    <div class="outer w-full h-full fixed" flex flex-col>
        <img src="@/assets/images/404-1.png"  class="m-auto  mt-20" alt="">
        <div class="flex justify-around ">
            <a href="/" class="flex flex-1 items-center gap-3 text-2xl justify-center pl-32">
                <img src="@/assets/images/404-2.png" alt="">
                <span>还回首页</span>
            </a>
            <a href="javascript:void(0);" @click.prevent="findUs" class="flex flex-1 items-center gap-3 text-2xl justify-center pr-20">
                <img src="@/assets/images/404-3.png" alt="">
                <span>联系我们</span>
            </a>
        </div>
    </div>

</template>
<style scoped>
.outer {
    background-color: rgb(118, 197, 240);
}


</style>