<script setup lang='ts'>
import { ref, reactive } from 'vue'
</script>
<template>
    <div class="left">左</div>
    <div class="right">
        <div class="header">头</div>
        <div class="content">
            <RouterView></RouterView>
        </div>
    </div>

</template>
<style scoped lang='scss'>

</style>