<script setup lang='ts'>
import { ref, reactive } from 'vue'

</script>
<template>
    <div class="h-12 border-b-2 border-gray-100 flex justify-between items-center px-5">
        <div></div>
        <div class="flex">
            <el-dropdown>
                <img class="w-8 h-8" src="@/assets/images/avatar.png" alt="">
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>个人中心</el-dropdown-item>
                        <el-dropdown-item>退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>

        </div>
    </div>
</template>
<style scoped lang='scss'>

</style>