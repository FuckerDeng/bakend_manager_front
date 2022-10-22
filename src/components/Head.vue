<script setup lang='ts'>
import { ref, reactive } from 'vue'
</script>
<template>
    <div class="h-12 border-b-2 border-gray-100 flex justify-between items-center px-5">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">promotion management</a></el-breadcrumb-item>
            <el-breadcrumb-item>promotion list</el-breadcrumb-item>
            <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
        </el-breadcrumb>
        <div >123</div>
    </div>
</template>
<style scoped lang='scss'>

</style>